import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



function isEmptyInputValue(value: any): boolean {
  return value == null || value.length === 0;
}


export class CustomValidators {

  static message = {
    fieldIsRequired: 'Detta fält måste fyllas i.',
    fieldIsInvalid: 'Detta fält är ogiltigt.',
    //maxLength: (1: number) => `Maximum string length of ${1} exceeded.`,
    //minLength: (1: number) => `Minimum string length of ${1} required.`,
    positiveNumbersOnlu: 'Endast positiva siffror.',
  };

  static required(errorMessage: string | null = null): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return isEmptyInputValue(control.value) ? {
        require: true,
        message: errorMessage || CustomValidators.message.fieldIsRequired
      }:null;
    }
  }
}
