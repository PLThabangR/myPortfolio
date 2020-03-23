import { TestBed } from '@angular/core/testing';

import { GetMydataService } from './get-mydata.service';

describe('GetMydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMydataService = TestBed.get(GetMydataService);
    expect(service).toBeTruthy();
  });
});
