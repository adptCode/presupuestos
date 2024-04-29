import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() {}

  presupuestos: any[] = []

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

  /*agregatePageOptions( pages: any) {
    this.pageOption = {}
     this.pageOption = pages
  }*/
  agregatePageOptions(pages:number,language:number) {
    
    this.pageOption = {pages,language}
  }

  agregateUsuario(user:any) {

    let userDefined = {...user, service: this.service, pageOption: this.pageOption, total: this.total}
    this.presupuestos.push(userDefined)
    console.log(this.presupuestos)
  }


}
