import { TestBed } from '@angular/core/testing';

import { RegistercarService } from './registercar.service';

describe('RegistercarService', () => {
  let service: RegistercarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
