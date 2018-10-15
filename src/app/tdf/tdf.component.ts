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
        "",
        "asad@gmail.com",
        74643433,
        "Angular",
        "morning",
        true
    );
    
    topicError = true;
    validateTopic(value){
        this.topicError = true;
        for(let i=0; i<this.topics.length; i++){
            if(value === this.topics[i]){
                this.topicError = false;
                break;
            }
        }
    }

    onSubmit(){
        console.log(this.userModel);
    }

    constructor() {}

    ngOnInit() {}
}
