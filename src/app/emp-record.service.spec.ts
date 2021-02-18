import { TestBed } from '@angular/core/testing';

import { EmpRecordService } from './emp-record.service';

describe('EmpRecordService', () => {
  let service: EmpRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
