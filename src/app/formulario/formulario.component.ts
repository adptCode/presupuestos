import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../validations';
import { Event } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {

  users: any[] = []

  public formularioUser: FormGroup = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(5), CustomValidators.onlyLetter]),
      telefono: new FormControl('',[Validators.required, CustomValidators.onlyNumber]),
      email: new FormControl('',[Validators.required, CustomValidators.emailCustom]),
  });

  constructor() {}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  agregarUsuario() {
    if(this.formularioUser.valid) {
      this.users.push(this.formularioUser.value)
      console.log(this.users)
    } else {
      throw new Error('validation fail')
    }



  }

}
