import { Component, OnInit, inject } from '@angular/core';
import { BudgetService } from '../budget.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss'
})
export class BudgetListComponent implements OnInit {

  presupuestos: any[] = [];
  name: string = '';
  orderD: boolean = false
  //filteredPreupuestos: any [] = [];
  public budgetService = inject(BudgetService)

  ngOnInit(): void {
    this.presupuestos = this.budgetService.getPresupuestos();
  }

  filterServices(services: any): any[] {
    return Object.keys(services)
      .filter(key => services[key] === true)
      .map(key => ({ key, value: services[key] }));
  }

  filterByName() {
    if(this.name !== '') {
      this.presupuestos = this.budgetService.getPresupuestos().filter(presupuesto => {
        return presupuesto.nombre === this.name
      })
    } else {
      this.presupuestos = this.budgetService.getPresupuestos();
    }

  }

  orderDate() {
    this.orderD = !this.orderD
    if(this.orderD) {
      this.presupuestos.sort((a,b) => a.date - b.date)
    } else {
      this.presupuestos.sort((a,b) => b.date - a.date)
    }

  }

  orderTotal() {
    this.orderD = !this.orderD
    if(this.orderD) {
      this.presupuestos.sort((a,b) => a.total - b.total)
    } else {
      this.presupuestos.sort((a,b) => b.total - a.total)
    }
  }

  orderName() {
    this.orderD = !this.orderD
    if(this.orderD) {
      this.presupuestos.sort((a,b) => a.nombre.localeCompare(b.nombre))
    } else {
      this.presupuestos.sort((a,b) => b.nombre.localeCompare(a.nombre))
    }
  }








}
