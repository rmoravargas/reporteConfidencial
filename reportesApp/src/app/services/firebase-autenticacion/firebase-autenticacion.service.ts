import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { User } from 'src/app/shared/User';
@Injectable({
  providedIn: 'root',
})
export class FirebaseAutenticacionService { 

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private router: Router 
  ) { 
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const result = await this.angularFireAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.setUserData(result.user); 
      this.router.navigate(['/', 'reporte']); 
    } catch (error) {
      throw error;
    }
  }

  signInWithGoogle() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  private async AuthLogin(provider: firebase.auth.AuthProvider) {
    try {
      const result = await this.angularFireAuth.signInWithPopup(provider);
      this.router.navigate(['/', 'reporte']);
      this.setUserData(result.user);
    } catch (error) {
      throw error;
    }
  }
  async isLoggedIn(): Promise<boolean> {
    const user = await this.angularFireAuth.currentUser;
    console.log('Usuario Firebase' + JSON.stringify(user));
    return user?.emailVerified;
  }

  async signOut() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['/', 'login']);
  }

  setUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  async SignUp(name: string, email: string, password: string) {
    try {
      let result = await this.angularFireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await result.user.updateProfile({ displayName: name });
      await result.user.reload();
      this.SendVerificationMail();
      this.setUserData(result.user);
    } catch (error) {
      throw error;
    }
  }

  async SendVerificationMail() {
    const firebaseUser = await this.angularFireAuth.currentUser;
    await firebaseUser.sendEmailVerification();
    this.router.navigate(['/', 'verificar-correo']);
  }

  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail);
    } catch (error) {
      throw error;
    }
  }
}
