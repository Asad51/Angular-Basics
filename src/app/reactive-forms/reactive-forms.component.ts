import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";
import { forbiddenNameValidator } from "./shared/user-name.validator";
//import { passwordValidator } from "./shared/password.validator";
import { RegistrationService } from '../registration.service';

@Component({
    selector: "app-reactive-forms",
    templateUrl: "./reactive-forms.component.html",
    styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {

    // registrationForm = new FormGroup({
    //     username: new FormControl(""),
    //     password: new FormControl(''),
    //     confirmPassword: new FormControl(''),
    //     address: new FormGroup({
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         country: new FormControl('')
    //     })
    // });

    get userName(){
        return this.registrationForm.get("username");
    }

    get email(){
        return this.registrationForm.get('email');
    }

    get alternateEmails(){
        return this.registrationForm.get('alternateEmails') as FormArray;
    }

    addAlternateEmail(){
        this.alternateEmails.push(this.fb.control(''));
    }

    constructor( private fb: FormBuilder, private rs: RegistrationService) {}

    registrationForm: FormGroup;

    ngOnInit() {


        this.registrationForm = this.fb.group({
            username: ["", [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9 ]*'), forbiddenNameValidator(/admin/)]],
            email: [''],
            alternateEmails: this.fb.array([]),
            password: ['', [Validators.required]],
            confirmPassword: [''],
            address: this.fb.group({
                city: [''],
                state: [''],
                country: ['Bangladesh']
            }),
            subscribe: [false]
        }, { validators: this.validatePassword } );

        this.registrationForm.get('subscribe').valueChanges
        .subscribe(checkedValue => {
            const email = this.registrationForm.get('email');
            if(checkedValue){
                email.setValidators(Validators.required);
            }
            else{
                email.clearValidators();
            }
            email.updateValueAndValidity();
        });

    }

    onSubmit(){
        this.rs.register(this.registrationForm.value)
        .subscribe(
            response => console.log('Success', response),
            error => console.log('Error', error)
        );
    }

    validatePassword(fg: FormGroup){
        let pw1 = fg.controls.password.value;
        let pw2 = fg.controls.confirmPassword.value;
        
        return pw1 === pw2 ? null : {misMatch: true};
    }

    loadApiData(){
        // this.registrationForm.setValue({
        //     username: "Asad",
        //     password: "test",
        //     confirmPassword: "test",
        //     address: {
        //         city: "Binodpur",
        //         state: "Rajshahi",
        //         country: "Bangladesh"
        //     }
        // })
    }
}
