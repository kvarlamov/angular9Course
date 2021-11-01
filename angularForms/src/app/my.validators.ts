import { FormControl } from "@angular/forms";

export class MyValidators {
    static restrictedEmails(control: FormControl): {[key: string] : boolean} {
        if (['test@mail.ru', 'test@mail.com'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }
        
        return null;
    }
}