import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CarBodyTypeEnum } from 'src/app/enums/carBodyType.enum';
import { MotorType } from 'src/app/enums/motorType.enum';
import { VehicleEnum } from 'src/app/enums/vehicleType.enum';
import { setVehicleType } from 'src/app/state/app.actions';
import { AppState } from 'src/app/state/app.state';
import { dutchLicensePlateValidator } from 'src/app/validators/dutchPlate.validator';

@Component({
  selector: 'app-vehicle-information-form',
  templateUrl: './vehicle-information-form.component.html',
  styleUrls: ['./vehicle-information-form.component.css']
})
export class VehicleInformationFormComponent implements OnInit, OnDestroy {
  // #region Properties (5)

  public showError = false;
  public vechicleBodyTypeOptions: string[];
  public vechicleTypeOptions: string[];
  public vehicleForm: FormGroup;
  vehicleTypeSub$: Subscription | undefined;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.vehicleForm = this.formBuilder.group({
      vehicleType: VehicleEnum.Auto,
      vehicleBody: CarBodyTypeEnum.Hatchback,
      licensePlate: ['', [Validators.required, dutchLicensePlateValidator]]
    });

    this.vechicleTypeOptions = Object.values(VehicleEnum);
    this.vechicleBodyTypeOptions = Object.values(CarBodyTypeEnum);
  }

  // #endregion Constructors (1)

  // #region Public Methods (3)

  public ngOnDestroy(): void {
    this.vehicleTypeSub$?.unsubscribe();
  }

  public ngOnInit(): void {
    this.vehicleTypeSub$ = this.vehicleForm.get('vehicleType')?.valueChanges.subscribe(
      value => { this.initBodyType(value) }
    )
  }

  public onSubmit() {
    if (this.vehicleForm.invalid) {
      this.showError = true;
    } else {
      this.showError = false;
    }
    console.log('Saved' + JSON.stringify(this.vehicleForm.value));
  }

  // #endregion Public Methods (3)

  // #region Private Methods (1)

  private initBodyType(value: VehicleEnum): void {
    this.store.dispatch(setVehicleType({ vehicleType: value }));
    switch (value) {
      case VehicleEnum.Auto:
        this.vechicleBodyTypeOptions = Object.values(CarBodyTypeEnum);
        this.vehicleForm.patchValue({
          vehicleBody: CarBodyTypeEnum.Hatchback
        });
        break;
      case VehicleEnum.Motor:
        this.vechicleBodyTypeOptions = Object.values(MotorType);
        this.vehicleForm.patchValue({
          vehicleBody: MotorType.Chopper
        });
        break;
      case VehicleEnum.Scooter:
        this.vechicleBodyTypeOptions = [];
        this.vehicleForm.patchValue({
          vehicleBody: null
        });
        break;
    }
  }

  // #endregion Private Methods (1)
}
