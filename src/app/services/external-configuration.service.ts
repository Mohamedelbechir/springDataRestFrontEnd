import { Injectable } from '@angular/core';
import { ExternalConfigurationHandlerInterface, ExternalConfiguration } from '@fingerprintsoft/angular-spring-hal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalConfigurationService implements ExternalConfigurationHandlerInterface {

  constructor(private http: HttpClient) { }
  deserialize() {
  }
  serialize() {
  }
  getProxyUri(): string {
    return 'http://localhost:8088';
  }
  getRootUri(): string {
    return 'http://localhost:4300';
  }
  getHttp(): HttpClient {
    return this.http;
  }
  getExternalConfiguration(): ExternalConfiguration {
    return null;
  }
  setExternalConfiguration(externalConfiguration: ExternalConfiguration) {
  }
}
