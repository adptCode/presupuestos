import { BudgetService } from '../../service/budget.service';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent  {


  constructor(public budgetService: BudgetService, private router: Router) {
    this.budgetService.agregatePageOptions(this.countPages, this.countLanguage);

}


  pages:string = 'pages';
  language:string = 'language';
  countPages:number = 1;
  countLanguage:number = 1;
  total:number = 0;
  validPages = new FormControl(this.countPages);
  validLanguage = new FormControl(this.countLanguage);
  titulo:string = "";
  texto:string = "";

  add(prop:string) {
    if(prop === this.pages) {
      this.countPages ++
      this.calculateTotalPage()
    }
    if(prop === this.language) {
      this.countLanguage ++
      this.calculateTotalPage()
    }
  }

  rest(prop:string) {
    if(prop === this.pages && this.countPages > 1) {
      this.countPages --
      this.calculateTotalPage()
    }
    if(prop === this.language && this.countLanguage > 1) {
      this.countLanguage --
      this.calculateTotalPage()
    }
  }

  calculateTotalPage() {
    this.total = 0
    if(this.countPages > 1 || this.countLanguage > 1) {
      this.total = this.countPages * this.countLanguage * 30;
    }
    this.budgetService.totalPage = this.total
    this.budgetService.calculateBudget();
    this.budgetService.agregatePageOptions(this.countPages, this.countLanguage);
    this.updateURL()
  }

  passParam(titulo:string, texto:string) {
    this.titulo = titulo
    this.texto = texto
  }

  updateURL() {
    const queryParams = {
      pages: this.countPages,
      lang: this.countLanguage
    };

    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

  resetLocalOptions() {
    this.countPages = 1;
    this.countLanguage = 1;
  }


}
