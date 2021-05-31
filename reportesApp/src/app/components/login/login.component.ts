import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAutenticacionService } from 'src/app/services/firebase-autenticacion/firebase-autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formdata: FormGroup;
  constructor(
    private firebaseAutenticacionService: FirebaseAutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl(''),
      userPassword: new FormControl(''),
    });
  }
  async signInWithGoogle() {
    await this.firebaseAutenticacionService.signInWithGoogle();
    this.router.navigate(['/', 'reporte']);
  }
  async signInWithEmailAndPassword() {
    if (this.formdata.valid) {
      try {
        await this.firebaseAutenticacionService.signInWithEmailAndPassword(
          this.formdata.value.email,
          this.formdata.value.userPassword
        );
        this.router.navigate(['/', 'reporte']);
      } catch (error) {
        window.alert(error.message);
        console.clear();
      }
    } 
  }
}
