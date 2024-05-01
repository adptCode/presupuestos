import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class CustomValidators extends Validators {
  static onlyNumber(control: AbstractControl): ValidationErrors | null {
    return /^\d{9}$/.test(control.value) ? null : {onlyNumber : true};
    /*const isValidNumber = /^\d{9}$/.test(control.value);
    const hasNoEChar = !/[eE]/.test(control.value);
    if (isValidNumber && hasNoEChar) {
      return null;
    } else {
      return { onlyNumber: true };
    }*/
  }

  static onlyLetter(control: AbstractControl): ValidationErrors | null {
    return /^[a-zA-Zñáéíóúü\s]+$/.test(control.value) ? null : {onlyLetter : true}
  }

  static emailCustom(control: AbstractControl): ValidationErrors | null {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value) ? null : {emailCustom : true}
  }


}
