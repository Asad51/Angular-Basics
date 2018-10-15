import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: "app-reactive-forms",
    templateUrl: "./reactive-forms.component.html",
    styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {

    registrationForm = new FormGroup({
        username: new FormControl("Asad"),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
        address: new FormGroup({
            city: new FormControl(''),
            state: new FormControl(''),
            country: new FormControl('')
        })
    });

    constructor() {}

    ngOnInit() {}

    loadApiData(){
        this.registrationForm.setValue({
            username: "Asad",
            password: "test",
            confirmPassword: "test",
            address: {
                city: "Binodpur",
                state: "Rajshahi",
                country: "Bangladesh"
            }
        })
    }
}
