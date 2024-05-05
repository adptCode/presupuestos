import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TEST AGREGADO

  it('total should be equal 1320', () => {
    service.totalBudget = 1200
    service.totalPage = 120
    service.calculateBudget()
    expect(service.total).toEqual(1320)
  })


});
