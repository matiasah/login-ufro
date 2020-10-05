import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarOAuth2ClientComponent } from './editar-oauth2-client.component';


describe('EditarOauth2ClientComponent', () => {
  let component: EditarOAuth2ClientComponent;
  let fixture: ComponentFixture<EditarOAuth2ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOAuth2ClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOAuth2ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
