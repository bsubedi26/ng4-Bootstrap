import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MailNavbarComponent } from './mail-navbar.component';

describe('InboxComponent', () => {
  let component: MailNavbarComponent;
  let fixture: ComponentFixture<MailNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
