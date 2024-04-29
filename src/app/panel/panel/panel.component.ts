import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { BudgetService } from '../../budget.service';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {

  constructor(public budgetService: BudgetService) {}

  pages:string = 'pages';
  language:string = 'language';
  countPages:number = 1;
  countLanguage:number = 1;
  total:number = 0;
  validPages = new FormControl(this.countPages);
  validLanguage = new FormControl(this.countLanguage);
  titulo:string = "";
  texto:string = "";
  webOptions: {pages:number,language:number}[] = [{pages:1, language:1}]



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
      this.total = this.countPages * this.countLanguage * 30
    }
    this.budgetService.totalPage = this.total
    this.budgetService.calculateBudget()
    this.updateWebOptions()
  }

  passParam(titulo:string, texto:string) {
    this.titulo = titulo
    this.texto = texto
  }

  updateWebOptions() {
    this.webOptions[0] = {pages:this.countPages, language:this.countLanguage}
    console.log(this.webOptions)
  }


}
