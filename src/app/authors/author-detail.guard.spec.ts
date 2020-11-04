import { TestBed } from '@angular/core/testing';

import { AuthorDetailGuard } from './author-detail.guard';

describe('AuthorDetailGuard', () => {
  let guard: AuthorDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
