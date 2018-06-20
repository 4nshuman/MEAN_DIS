import { TestBed, inject } from '@angular/core/testing';

import { DISService } from './dis.service';

describe('DISService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DISService]
    });
  });

  it('should be created', inject([DISService], (service: DISService) => {
    expect(service).toBeTruthy();
  }));
});
