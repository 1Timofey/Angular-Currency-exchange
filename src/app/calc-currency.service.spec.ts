import { TestBed } from '@angular/core/testing';

import { CalcCurrencyService } from './calc-currency.service';

describe('CalcCurrencyService', () => {
  let service: CalcCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
