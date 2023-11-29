import { TestBed } from '@angular/core/testing';

import { InmatesService } from './inmates.service';

describe('InmatesService', () => {
  let service: InmatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
