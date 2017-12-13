import { TestBed, inject } from '@angular/core/testing';

import { ProductaddService } from './productadd.service';

describe('ProductaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductaddService]
    });
  });

  it('should be created', inject([ProductaddService], (service: ProductaddService) => {
    expect(service).toBeTruthy();
  }));
});
