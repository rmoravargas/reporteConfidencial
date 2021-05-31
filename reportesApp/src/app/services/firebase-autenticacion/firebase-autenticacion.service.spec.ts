import { TestBed } from '@angular/core/testing';

import { FirebaseAutenticacionService } from './firebase-autenticacion.service';

describe('FirebaseAutenticacionService', () => {
  let service: FirebaseAutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
