import { TestBed } from '@angular/core/testing';

import { AuthorEditGuard } from './author-edit.guard';

describe('AuthorEditGuard', () => {
  let guard: AuthorEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
