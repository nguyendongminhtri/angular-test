import { TestBed } from '@angular/core/testing';

import { FormloginService } from './formlogin.service';

describe('FormloginService', () => {
  let service: FormloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
