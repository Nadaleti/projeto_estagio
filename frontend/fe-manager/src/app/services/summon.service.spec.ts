import { TestBed } from '@angular/core/testing';

import { SummonService } from './summon.service';

describe('SummonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummonService = TestBed.get(SummonService);
    expect(service).toBeTruthy();
  });
});
