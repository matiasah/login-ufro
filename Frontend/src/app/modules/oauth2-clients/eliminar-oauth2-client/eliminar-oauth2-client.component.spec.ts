import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarOAuth2ClientComponent } from './eliminar-oauth2-client.component';


describe('EliminarOauth2ClientComponent', () => {
  let component: EliminarOAuth2ClientComponent;
  let fixture: ComponentFixture<EliminarOAuth2ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarOAuth2ClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarOAuth2ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
