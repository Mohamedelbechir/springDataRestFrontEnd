import { TestBed } from '@angular/core/testing';

import { ExternalConfigurationService } from './external-configuration.service';

describe('ExternalConfigurationService', () => {
  let service: ExternalConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
