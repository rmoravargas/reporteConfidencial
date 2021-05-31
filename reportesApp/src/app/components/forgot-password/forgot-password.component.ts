import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAutenticacionService } from 'src/app/services/firebase-autenticacion/firebase-autenticacion.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  formdata: FormGroup;
  constructor(
    private firebaseAutenticacionService: FirebaseAutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl(''),
    });
  }

  async resetPassword() {
    await this.firebaseAutenticacionService.ForgotPassword(
      this.formdata.value.userName
    );
    this.router.navigate(['/', 'login']);
    window.alert(
      'Se envió un correo electrónico para restablecer la contraseña, revise su bandeja de entrada.'
    );
  }
}
