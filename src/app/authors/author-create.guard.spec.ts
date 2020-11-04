import { TestBed } from '@angular/core/testing';

import { AuthorCreateGuard } from './author-create.guard';

describe('AuthorCreateGuard', () => {
  let guard: AuthorCreateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorCreateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
