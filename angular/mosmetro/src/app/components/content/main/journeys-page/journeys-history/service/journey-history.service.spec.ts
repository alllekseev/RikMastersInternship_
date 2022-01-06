import { TestBed } from '@angular/core/testing';

import { JourneyHistoryService } from './journey-history.service';

describe('JourneyHistoryService', () => {
  let service: JourneyHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
