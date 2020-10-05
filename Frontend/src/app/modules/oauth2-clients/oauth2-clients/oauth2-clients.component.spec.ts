import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oauth2ClientsComponent } from './oauth2-clients.component';

describe('Oauth2ClientsComponent', () => {
  let component: Oauth2ClientsComponent;
  let fixture: ComponentFixture<Oauth2ClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oauth2ClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oauth2ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
