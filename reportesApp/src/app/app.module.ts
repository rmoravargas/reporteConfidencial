import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { FirebaseAutenticacionService } from './services/firebase-autenticacion/firebase-autenticacion.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, ReporteComponent, ForgotPasswordComponent, RegisterComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [FirebaseAutenticacionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

