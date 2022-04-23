import { TestBed } from '@angular/core/testing';

import { KursetService } from './kurset.service';

describe('KursetService', () => {
  let service: KursetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
