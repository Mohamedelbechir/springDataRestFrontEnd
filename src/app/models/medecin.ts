import { Hospitalisation } from './hospitalisation';
import { Resource } from '@fingerprintsoft/angular-spring-hal';

export class Medecin extends Resource {
    id: number;
    cin: number;
    hospitalisations: Hospitalisation;
    nom: string;
    prenom: string;
}