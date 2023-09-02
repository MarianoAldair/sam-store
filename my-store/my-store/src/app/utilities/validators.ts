import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static hasNumber(control: AbstractControl) {
    const controlValue = control.value;
    if(!containsNumber(controlValue)) {
      return {invalid_password: true};
    }
    return null;
  }
}

function containsNumber(value: string) {
  return value.split('').find(val => isNumber(val)) !== undefined;
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}