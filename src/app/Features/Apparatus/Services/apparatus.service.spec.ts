import { TestBed } from '@angular/core/testing';

import { ApparatusService } from './apparatus.service';

describe('ApparatusService', () => {
  let service: ApparatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApparatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
