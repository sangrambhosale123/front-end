import { TestBed } from '@angular/core/testing';

import { ViewappoinmentService } from './viewappoinment.service';

describe('ViewappoinmentService', () => {
  let service: ViewappoinmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewappoinmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
