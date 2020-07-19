import { Resource } from '@fingerprintsoft/angular-spring-hal';
import { Team } from './team';

export class Player extends Resource {
    id: number;
    firstName: string;
    lastName: string;
    team: Team;
}