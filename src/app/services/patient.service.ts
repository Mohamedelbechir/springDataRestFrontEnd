import { Injectable, Injector } from '@angular/core';
import { RestService } from '@fingerprintsoft/angular-spring-hal';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends RestService<Patient> {

  constructor(injector: Injector) {
    super(Patient, 'patients', injector);
  }
}
