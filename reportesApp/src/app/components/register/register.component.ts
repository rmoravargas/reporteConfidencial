import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAutenticacionService } from 'src/app/services/firebase-autenticacion/firebase-autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formdata: FormGroup;
  constructor(
    private firebaseAutenticacionService: FirebaseAutenticacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  async registerWithEmailAndPassword() {
    if (this.formdata.valid) {
      try {
        await this.firebaseAutenticacionService.SignUp(
          this.formdata.value.fullName,
          this.formdata.value.email,
          this.formdata.value.userPassword
        ); 
        this.router.navigate(['/', 'login']);
        window.alert(
          'Por favor revise su correo para validar su acceso a la aplicación'
        );
      } catch (error) {
        window.alert(error.message);
        console.clear();
      }
    }
  }
}
