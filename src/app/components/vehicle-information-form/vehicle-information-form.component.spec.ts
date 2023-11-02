import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInformationFormComponent } from './vehicle-information-form.component';

describe('VehicleInformationFormComponent', () => {
  let component: VehicleInformationFormComponent;
  let fixture: ComponentFixture<VehicleInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
