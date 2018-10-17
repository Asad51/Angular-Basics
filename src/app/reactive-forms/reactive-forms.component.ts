import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { forbiddenNameValidator } from "./shared/user-name.validator";
import { passwordValidator } from "./shared/password.validator";

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

    constructor( private fb: FormBuilder) {}

    registrationForm: FormGroup;

    ngOnInit() {
        this.registrationForm = this.fb.group({
            username: ["", [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/)]],
            email: [''],
            password: ['', Validators.required],
            confirmPassword: [''],
            address: this.fb.group({
                city: [''],
                state: [''],
                country: ['Bangladesh']
            }),
            subscribe: [false]
        }, {Validator: passwordValidator} );

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
