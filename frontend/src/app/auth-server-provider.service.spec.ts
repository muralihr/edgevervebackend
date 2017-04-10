import { TestBed, inject } from '@angular/core/testing';

import { AuthServerProviderService } from './auth-server-provider.service';

describe('AuthServerProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServerProviderService]
    });
  });

  it('should ...', inject([AuthServerProviderService], (service: AuthServerProviderService) => {
    expect(service).toBeTruthy();
  }));
});
