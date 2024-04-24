import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  totalBudget: number = 0;

  totalPage:number = 0

  total = 0

  calculateBudget() {

    this.total = this.totalBudget + this.totalPage

    console.log(this.total)

  }







}
