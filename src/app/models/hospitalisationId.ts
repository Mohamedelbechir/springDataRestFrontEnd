import { Patient } from './patient';
import { Medecin } from './medecin';
import { Resource } from '@fingerprintsoft/angular-spring-hal';

export class HospitalisationId  extends Resource {
    dateEntree:string;
    patient:Patient;
    medecin:Medecin
   
}