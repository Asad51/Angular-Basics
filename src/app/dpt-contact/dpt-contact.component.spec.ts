import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DptContactComponent } from "./dpt-contact.component";

describe("DptContactComponent", () => {
    let component: DptContactComponent;
    let fixture: ComponentFixture<DptContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DptContactComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DptContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
