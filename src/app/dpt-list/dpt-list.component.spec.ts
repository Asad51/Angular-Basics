import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DptListComponent } from "./dpt-list.component";

describe("DptListComponent", () => {
    let component: DptListComponent;
    let fixture: ComponentFixture<DptListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DptListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DptListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
