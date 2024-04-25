import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Form, Validators } from '@angular/forms';
import { PanelComponent } from '../panel/panel/panel.component';
import { BudgetService } from '../budget.service';
import { FormularioComponent } from '../formulario/formulario.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PanelComponent, FormularioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public budgetService: BudgetService) {}

  public form: FormGroup = new FormGroup({
    checkbox1: new FormControl(false),
    checkbox2: new FormControl(false),
    checkbox3: new FormControl(false),
  })

  total: number = 0;

  calculateTotal() {
    this.total = 0;
    if(this.form.value.checkbox1) {
      this.total += 300
    }
    if(this.form.value.checkbox2) {
      this.total += 400
    }
    if(this.form.value.checkbox3) {
      this.total += 500
      this.budgetService.calculateBudget()
    } else {
      this.budgetService.totalBudget = this.total
      this.budgetService.totalPage = 0
    }

    this.budgetService.totalBudget = this.total
    this.budgetService.calculateBudget()


  }
}








