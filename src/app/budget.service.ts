import { Injectable } from '@angular/core';
import { UserBudget } from './interface/user-budget';

//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() {}

  presupuestos: UserBudget[] = []

  totalBudget: number = 0;
  totalPage:number = 0
  total: number = 0;
  service: any= {};
  pageOption:any = {};



  calculateBudget() {
    this.total = this.totalBudget + this.totalPage

  }

  agregateService(servicio:any) {
    this.service = {...servicio}
  }

  agregatePageOptions(pages:number,language:number) {

    this.pageOption = {pages,language}
  }

  agregateUsuario(user:any) {


    let userDefined = {
                        ...user,
                        service: this.service,
                        total: this.total,
                        date: new Date().getTime(),
                      };

    if(userDefined.service.web) {
      userDefined.pageOption = this.pageOption
    }
    this.presupuestos.push(userDefined)
    console.log(this.presupuestos)

    this.total = 0
  }

  getPresupuestos() {
    return this.presupuestos
  }

 //private resetSource = new Subject<void>();
  //resetObservable = this.resetSource.asObservable();

  resetOptions() {
    this.pageOption = {};
    //this.resetSource.next();
  }


}

