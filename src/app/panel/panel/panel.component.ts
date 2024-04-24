import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../../budget.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {


  public form: FormGroup = new FormGroup({
    numberPages: new FormControl(1, Validators.min(1)),
    numberLanguage : new FormControl(1, Validators.min(1)),
  });

  total = 0

  decrementingPages() {
    if(this.form.value.numberPages > 1) {
      this.form.value.numberPages --
    }
    this.calculateTotal()
  }

  incrementingPages() {
    this.form.value.numberPages ++
    this.calculateTotal()
  }

  decrementingLang() {
    if(this.form.value.numberLanguage > 1) {
      this.form.value.numberLanguage --
    }
    this.calculateTotal()
  }

  incrementingLang() {
    this.form.value.numberLanguage ++
    this.calculateTotal()
  }

  constructor(private budgetService: BudgetService) {}

  calculateTotal() {

    this.total = this.form.value.numberPages * this.form.value.numberLanguage * 30;
    //console.log(this.total)
    this.budgetService.totalPage = this.total
    this.budgetService.calculateBudget()

  }









}
