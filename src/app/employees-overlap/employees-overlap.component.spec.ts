import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOverlapComponent } from './employees-overlap.component';

describe('EmployeesOverlapComponent', () => {
  let component: EmployeesOverlapComponent;
  let fixture: ComponentFixture<EmployeesOverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesOverlapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesOverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
