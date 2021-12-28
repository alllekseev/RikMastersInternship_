import { TestBed } from '@angular/core/testing';

import { TarrifsService } from './tariffs.service';

describe('TarrifsService', () => {
  let service: TarrifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarrifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
