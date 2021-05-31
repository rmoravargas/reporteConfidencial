import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseAutenticacionService } from 'src/app/services/firebase-autenticacion/firebase-autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private firebaseAutenticacionService: FirebaseAutenticacionService,
    private router: Router
  ) {}
  async canActivate(): Promise<boolean> {
    const isAutenticathed= await this.firebaseAutenticacionService.isLoggedIn();
    if (!isAutenticathed) {
      this.router.navigate(['/', 'login']);
    }
    return isAutenticathed;
  }
}
