import { Resource } from '@fingerprintsoft/angular-spring-hal';
import { HospitalisationId } from './hospitalisationId';

export class Hospitalisation extends Resource {
    id: HospitalisationId;
    dateSortie: string;

}