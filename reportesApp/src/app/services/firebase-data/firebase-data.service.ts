import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDataService {
  constructor(private angularFirestore: AngularFirestore) {
    this.angularFirestore
      .collection('products')
      .valueChanges()
      .subscribe((result) => { 
        if (result.length <= 0) {
          this.initTestProductsData();
        }
      });
  }

  public getActiveProducts() {
    return this.angularFirestore.collection('products').valueChanges();
  }

  private async initTestProductsData() {
    console.log('Se agrega información de prueba');
    
    await this.angularFirestore.collection('products').add({
      discountPercent: 3,
      group: 'Computers',
      isActive: true,
      name: 'Laptop Ru4X',
      quantity: 13,
      taxPercent: 5,
      unitPrice: 1000,
    });
    await this.angularFirestore.collection('products').add({
      discountPercent: 5,
      group: 'Servers',
      isActive: true,
      name: 'Server SA3X',
      quantity: 2,
      taxPercent: 0,
      unitPrice: 5000,
    });
    await this.angularFirestore.collection('products').add({
      discountPercent: 0,
      group: 'Computers',
      isActive: false,
      name: 'CPU JR9X',
      quantity: 12,
      taxPercent: 8,
      unitPrice: 500,
    });
    await this.angularFirestore.collection('products').add({
      discountPercent: 0,
      group: 'Servers',
      isActive: true,
      name: 'Server S34X',
      quantity: 20,
      taxPercent: 10,
      unitPrice: 100,
    });
    await this.angularFirestore.collection('products').add({
      discountPercent: 0,
      group: 'Computers',
      isActive: true,
      name: 'Laptop JF3X',
      quantity: 9,
      taxPercent: 3,
      unitPrice: 2000,
    });
  }
}
