import { TestBed } from '@angular/core/testing';

import { NgxAlertService } from './ngx-alert.service';

describe('NgxAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAlertService = TestBed.get(NgxAlertService);
    expect(service).toBeTruthy();
  });
});
