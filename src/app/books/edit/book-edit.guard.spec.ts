import { TestBed } from '@angular/core/testing';

import { BookEditGuard } from './book-edit.guard';

describe('BookEditGuard', () => {
  let guard: BookEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
