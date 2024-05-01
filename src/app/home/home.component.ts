import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PanelComponent } from '../panel/panel/panel.component';
import { BudgetService } from '../budget.service';
import { CustomValidators } from '../validations';
import { BudgetListComponent } from '../budget-list/budget-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PanelComponent, BudgetListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public budgetService: BudgetService) {}



  objectoServicios: any = {};
  //servicios: any = [];
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
    //this.servicios = [];

    if(this.service.seo) {
      this.total += 300
    }
    if(this.service.ads) {
      this.total += 400
    }
    if(this.service.web) {
      this.total += 500
    } else {
      this.budgetService.totalPage = 0;
      this.budgetService.calculateBudget()
    }

    this.budgetService.totalBudget = this.total;
    this.budgetService.calculateBudget();
    this.budgetService.agregateService(this.service)


    /*if (this.form.value.checkbox1) {
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
    this.budgetService.agregateServiced(this.servicios)
    //this.budgetService.agregateServiced(this.servicios)
    //console.log(this.servicios)*/
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

  /*getNombreErrors(): string {
    const errors = this.formularioUser.get('nombre')?.errors;
    if (!errors) return '';
    if (errors['required']) {
      return 'El campo nombre es requerido';
    } else if (errors['onlyLetter']) {
      return 'El campo solo contiene letras';
    } else if (errors['minlength']) {
      return `El campo debe tener minimo ${errors['minlength'].requiredLength} caracteres`;
    }
    return '';
  }
*/




}











