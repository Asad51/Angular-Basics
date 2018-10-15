import { Component, OnInit, NgModule } from "@angular/core";
import { User } from "./user";

@Component({
    selector: "app-tdf",
    templateUrl: "./tdf.component.html",
    styleUrls: ["./tdf.component.css"]
})
export class TdfComponent implements OnInit {
    topics = ["Angular", "Vue", "React"];
    //userModel = new User();
    userModel = new User(
        "Asad",
        "asad@gmail.com",
        "+880162525",
        "Angular",
        "morning",
        true
    );

    constructor() {}

    ngOnInit() {}
    onSubmit() {}
}
