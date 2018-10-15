import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DptDetailsComponent } from "./dpt-details.component";

describe("DptDetailsComponent", () => {
    let component: DptDetailsComponent;
    let fixture: ComponentFixture<DptDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DptDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DptDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
