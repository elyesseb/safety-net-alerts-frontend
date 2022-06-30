import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailByCityComponent } from './mail-by-city.component';

describe('MailByCityComponent', () => {
  let component: MailByCityComponent;
  let fixture: ComponentFixture<MailByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
