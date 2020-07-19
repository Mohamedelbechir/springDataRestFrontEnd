import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ExternalConfigurationService } from './services/external-configuration.service';
import { TeamMangerComponent } from './team-manger/team-manger.component';
import { AngularHalModule } from '@fingerprintsoft/angular-spring-hal';

@NgModule({
  declarations: [
    AppComponent,
    TeamMangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AngularHalModule.forRoot()

  ],
  providers: [{
    provide: 'ExternalConfigurationService',
    useClass: ExternalConfigurationService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
