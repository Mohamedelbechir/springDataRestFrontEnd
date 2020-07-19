import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamsService } from '../services/teams.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-team-manger',
  templateUrl: './team-manger.component.html',
  styleUrls: ['./team-manger.component.scss']
})
export class TeamMangerComponent implements OnInit {

  teams: Team[];
  loading = true;
  selectedTeam: Team
  selectedPlayers: Player[]
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getAllTeams();
    // let myTeam = this.teams[0];
    /** ! Parameters
      The type of the resource
      i.e. Player
      The name of the relation. The value must match a 
      member of the _links object in the HAL response of the owning resource
      i.e. 'players'
     */
    /*  myTeam.getRelationArray(Player, 'players').subscribe(
       (players: Player[]) => myTeam.players = players,
       (error) => console.log(error),
       () => this.loading = false
     ) */
  }
  getAllTeams() {
    this.teamsService.getAll().subscribe(
      (teams: Team[]) => {
        console.log(teams)
        this.teams = teams
      },
      (error) => console.log(error)
    )
  }
  onSelect(team: Team) {
    team.postRelation
    team.getRelationArray(Player, 'players').subscribe(
      (players: Player[]) => this.selectedPlayers = players,
      (error) => console.log(error),
      () => this.loading = false
    )
  }
}
