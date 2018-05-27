import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static required(control: AbstractControl) {
        if (!control.value) {
            return {'required': true};
        }
        if (control.value && control.value.trim().length === 0) {
            return {'required': true};
        }
    }
}