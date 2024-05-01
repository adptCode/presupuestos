import { Component, OnInit, inject } from '@angular/core';
import { BudgetService } from '../budget.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss'
})
export class BudgetListComponent implements OnInit {

  presupuestos: any[] = [];
  public budgetService = inject(BudgetService)

  ngOnInit(): void {
    this.presupuestos = this.budgetService.getPresupuestos();
  }

  filterServices(services: any): any[] {
    return Object.keys(services)
      .filter(key => services[key] === true)
      .map(key => ({ key, value: services[key] }));
  }








}
