import { TestBed } from '@angular/core/testing';

import { KursiService } from './kursi.service';

describe('KursiService', () => {
  let service: KursiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
