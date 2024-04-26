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

  objectoServicios: any = {}
  servicios: any = []
  total: number = 0;

  calculateTotal() {
    this.total = 0;
    this.servicios = []; 

    if (this.form.value.checkbox1) {
      this.total += 300;
      this.servicios.push('Seo');
    }
    if (this.form.value.checkbox2) {
      this.total += 400;
      this.servicios.push('Ads');
    }
    if (this.form.value.checkbox3) {
      this.total += 500;
      this.servicios.push('Web');
    }

    this.budgetService.totalBudget = this.total;
    this.budgetService.calculateBudget();

    if (!this.form.value.checkbox3) {
      this.budgetService.totalPage = 0;
      this.budgetService.calculateBudget()
    }

    console.log(this.servicios)
  }
}











