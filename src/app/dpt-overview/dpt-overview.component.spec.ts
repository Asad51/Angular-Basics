import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptOverviewComponent } from './dpt-overview.component';

describe('DptOverviewComponent', () => {
  let component: DptOverviewComponent;
  let fixture: ComponentFixture<DptOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
