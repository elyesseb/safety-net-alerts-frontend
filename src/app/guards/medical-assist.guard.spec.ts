import { TestBed } from '@angular/core/testing';

import { MedicalAssistGuard } from './medical-assist.guard';

describe('MedicalAssistGuard', () => {
  let guard: MedicalAssistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedicalAssistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
