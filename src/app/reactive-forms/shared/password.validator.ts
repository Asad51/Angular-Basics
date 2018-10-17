import { AbstractControl, ValidatorFn, FormGroup } from "@angular/forms";

export function passwordValidator(fg: FormGroup ): { [key: string ]: boolean } | null {
    const password = fg.get('password');
    const confirmPassword = fg.get('confirmPassword');
    console.log(password + " " +  confirmPassword);
    return (password && confirmPassword && password.value != confirmPassword.value) ? { misMatch: true }: null;
}