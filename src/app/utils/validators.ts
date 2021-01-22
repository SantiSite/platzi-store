import { AbstractControl } from '@angular/forms';

export class MyValidators {

static isPriceValid(control: AbstractControl): {price_invalid: boolean} {
    const value = control.value;
    console.log(value);
    if (value > 100000) {
      return {price_invalid: true};
    }
    return null;
  }
}
