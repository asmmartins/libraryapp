import { TestBed } from '@angular/core/testing';

import { SubjectEditGuard } from './subject-edit.guard';

describe('SubjectEditGuard', () => {
  let guard: SubjectEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubjectEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
