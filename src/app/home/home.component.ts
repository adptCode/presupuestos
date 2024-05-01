import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelComponent } from '../panel/panel/panel.component';
import { BudgetService } from '../budget.service';
import { CustomValidators } from '../validations';
import { BudgetListComponent } from '../budget-list/budget-list.component';
import { Router } from '@angular/router';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PanelComponent, BudgetListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(public budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home'], { queryParams: {} });
  }

  objectoServicios: any = {};
  users: any[] = [];
  user = {nombre: '',telefono: '',correo: ''}
  total: number = 0;
  service:any = {seo:false, ads:false, web:false}

  public form: FormGroup = new FormGroup({
    checkbox1: new FormControl(false),
    checkbox2: new FormControl(false),
    checkbox3: new FormControl(false),
  })

  public formularioUser: FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(5), CustomValidators.onlyLetter]),
    telefono: new FormControl('',[Validators.required, CustomValidators.onlyNumber]),
    email: new FormControl('',[Validators.required, CustomValidators.emailCustom]),
});

  changeStatus() {
    this.form.value.checkbox1 ? this.service.seo = true : this.service.seo = false;
    this.form.value.checkbox2 ? this.service.ads = true : this.service.ads = false;
    this.form.value.checkbox3 ? this.service.web = true : this.service.web = false;
    this.calculateTotal()

  }

  calculateTotal() {
    this.total = 0;

    if(this.service.seo) {
      this.total += 300;
    }
    if(this.service.ads) {
      this.total += 400;
    }
    if(this.service.web) {
      this.total += 500;
    } else {
      this.budgetService.totalPage = 0;
      this.budgetService.calculateBudget()
    }
    this.budgetService.totalBudget = this.total;
    this.budgetService.calculateBudget();
    this.budgetService.agregateService(this.service);

  }

  agregarUsuario() {
    if(this.formularioUser.valid) {
      this.user.nombre = this.formularioUser.value.nombre;
      this.user.telefono = this.formularioUser.value.telefono;
      this.user.correo = this.formularioUser.value.email;
      this.budgetService.agregateUsuario(this.user);

      this.form.reset()
      this.formularioUser.reset()
    } else {
      throw new Error('validation fail')
    }
  }

  updateURL() {

    let queryParams: any = {};

    if (this.service.seo) {
      queryParams['CampaignSeo'] = true;
    } else {
      queryParams['CampaignSeo'] = null;
    }

    if (this.service.ads) {
      queryParams['CampaignAds'] = true;
    } else {
      queryParams['CampaignAds'] = null;
    }

    if (this.service.web) {
      queryParams['WebPage'] = true;
      queryParams['pages'] = 1 || this.budgetService.pageOption.pages;
      queryParams['lang'] = 1 || this.budgetService.pageOption.language;
    } else {
      queryParams['WebPage'] = null;
      queryParams['pages'] = null;
      queryParams['lang'] = null;
    }

    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

  resetURL() {
    this.router.navigate(['/home'], { queryParams: {} });
    this.budgetService.resetOptions()
  }

}











