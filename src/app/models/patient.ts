import { Hospitalisation } from './hospitalisation';
import { Resource } from '@fingerprintsoft/angular-spring-hal';

export class Patient extends Resource {

    id: number;
    nom: string;
    prenom: string;
    hospitalisations: Hospitalisation

}