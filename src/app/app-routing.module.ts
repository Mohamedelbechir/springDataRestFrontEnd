import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamMangerComponent } from './team-manger/team-manger.component';


const routes: Routes = [

  ...['', 'teams'].map(p => ({ path: p, component: TeamMangerComponent }))
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
