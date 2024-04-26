import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() {}

  presupuestos: any[] = []

  totalBudget: number = 0;
  totalPage:number = 0
  total: number = 0;


  calculateBudget() {
    this.total = this.totalBudget + this.totalPage
    
  }

}
