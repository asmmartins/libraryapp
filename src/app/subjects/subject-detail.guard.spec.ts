import { TestBed } from '@angular/core/testing';

import { SubjectDetailGuard } from './subject-detail.guard';

describe('SubjectDetailGuard', () => {
  let guard: SubjectDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubjectDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
