import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMedicalAssistComponent } from './board-medical-assist.component';

describe('BoardMedicalAssistComponent', () => {
  let component: BoardMedicalAssistComponent;
  let fixture: ComponentFixture<BoardMedicalAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardMedicalAssistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMedicalAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
