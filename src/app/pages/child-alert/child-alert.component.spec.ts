import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAlertComponent } from './child-alert.component';

describe('ChildAlertComponent', () => {
  let component: ChildAlertComponent;
  let fixture: ComponentFixture<ChildAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
