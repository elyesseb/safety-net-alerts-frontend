import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestationUrlComponent } from './firestation-url.component';

describe('FirestationUrlComponent', () => {
  let component: FirestationUrlComponent;
  let fixture: ComponentFixture<FirestationUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestationUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestationUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
