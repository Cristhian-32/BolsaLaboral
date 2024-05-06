import { TestBed } from '@angular/core/testing';

import { StudentInterceptor } from './student.interceptor';

describe('StudentInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StudentInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StudentInterceptor = TestBed.inject(StudentInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
