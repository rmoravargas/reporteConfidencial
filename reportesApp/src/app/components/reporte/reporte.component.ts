import { Component, OnInit } from '@angular/core';
import { FirebaseAutenticacionService } from 'src/app/services/firebase-autenticacion/firebase-autenticacion.service';
import { FirebaseDataService } from 'src/app/services/firebase-data/firebase-data.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent implements OnInit {
  productosActivos$: any;
  sumatoria: number;
  constructor(
    private firebaseAutenticacionService: FirebaseAutenticacionService,
    private firebaseDataService: FirebaseDataService
  ) {}

  ngOnInit(): void {
    this.productosActivos$ = this.firebaseDataService.getActiveProducts();
  }

  signOut() {
    this.firebaseAutenticacionService.signOut();
  }
  mostrarDialogoImprimir() {
    window.print();
  }
}
