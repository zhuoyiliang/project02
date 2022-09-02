import { TestBed } from '@angular/core/testing';

import { ArgServiceService } from './arg-service.service';

describe('ArgServiceService', () => {
  let service: ArgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
