import { Resource } from '@fingerprintsoft/angular-spring-hal';
import { Player } from './player';

export class Team extends Resource {
    name: string;
    businessName: string;
    players: Player[];
}