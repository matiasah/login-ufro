import { TestBed } from '@angular/core/testing';
import { OAuth2ClientService } from './oauth2-client.service';


describe('Oauth2ClientService', () => {
  let service: OAuth2ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OAuth2ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
