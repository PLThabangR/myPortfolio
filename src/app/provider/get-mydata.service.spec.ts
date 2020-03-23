import { TestBed } from '@angular/core/testing';

import { GetMydataService } from './get-mydata.service';

describe('GetMydataService', () => {
  let service: GetMydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
