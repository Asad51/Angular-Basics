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

    constructor( private fb: FormBuilder) {}

    registrationForm = this.fb.group({
        username: ["", [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/)]],
        password: ['', Validators.required],
        confirmPassword: [''],
        address: this.fb.group({
            city: [''],
            state: [''],
            country: ['Bangladesh']
        })
    }, {Validator: passwordValidator} );

    ngOnInit() {}

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
