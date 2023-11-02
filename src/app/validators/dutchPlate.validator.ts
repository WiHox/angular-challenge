import { AbstractControl } from "@angular/forms";
import { KentekenCheck } from "rdw-kenteken-check";

export function dutchLicensePlateValidator(control: AbstractControl): {[key: string]: boolean } | null {
    let kentekenValidator = new KentekenCheck(control.value);
    console.log(kentekenValidator.formatLicense())
    if(!kentekenValidator.matchLicense(control.value))
    {
        return {'Invalid plate format': true }
    }
    return null;
}