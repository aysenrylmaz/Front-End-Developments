import { TestBed } from '@angular/core/testing';

import { TimelineservicesService } from './timelineservices.service';

describe('TimelineservicesService', () => {
  let service: TimelineservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
