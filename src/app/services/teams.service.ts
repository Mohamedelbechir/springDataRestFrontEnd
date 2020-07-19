import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { RestService } from '@fingerprintsoft/angular-spring-hal';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends RestService<Team> {


  constructor(injector: Injector) {
    super(Team, 'teams', injector);
  }

  public findByName(name: string): Observable<Team[]> {
    let options: any = { params: [{ key: 'name', value: name }] };
    return this.search('findByName', options);
  }

  public findByBusinessName(businessName: string): Observable<Team> {
    let options: any = { params: [{ key: 'businessName', value: businessName }] };
    return this.searchSingle('findByBusinessName', options);
  }
  public update(team: Team): Observable<Team> {
    return this.update(team)
  }
}
