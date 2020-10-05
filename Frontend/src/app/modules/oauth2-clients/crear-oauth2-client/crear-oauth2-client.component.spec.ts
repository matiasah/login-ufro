import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearOAuth2ClientComponent } from './crear-oauth2-client.component';


describe('CrearOauth2ClientComponent', () => {
  let component: CrearOAuth2ClientComponent;
  let fixture: ComponentFixture<CrearOAuth2ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOAuth2ClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOAuth2ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
