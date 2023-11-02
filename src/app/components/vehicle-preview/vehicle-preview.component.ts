import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { VehicleEnum } from 'src/app/enums/vehicleType.enum';
import { selectVehicleType } from 'src/app/state/app.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-vehicle-preview',
  templateUrl: './vehicle-preview.component.html',
  styleUrls: ['./vehicle-preview.component.css']
})
export class VehiclePreviewComponent implements OnInit, OnDestroy {
  // #region Properties (4)

  private vehicleDictionary: { [key in VehicleEnum]: string } = {
    [VehicleEnum.Auto]: "./assets/auto.jpg",
    [VehicleEnum.Motor]: "./assets/motor.jpg",
    [VehicleEnum.Scooter]: "./assets/scooter.jpg"
  }

  currentVehicleSub!: Subscription;
  public vehiclePicturePath!: string;
  public vehicleTypeName!: string;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(private store: Store<AppState>) {
    this.setPreviewDetails(VehicleEnum.Auto);
  }

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public ngOnDestroy(): void {
    this.currentVehicleSub.unsubscribe();
  }

  public ngOnInit(): void {
    this.store.pipe(select(selectVehicleType))
  .subscribe(
    next => {
      this.setPreviewDetails(next)
    }
  );
  }

  // #endregion Public Methods (2)

  // #region Private Methods (1)

  private setPreviewDetails(vehicleType: VehicleEnum) {
    this.vehicleTypeName = vehicleType;
    this.vehiclePicturePath = this.vehicleDictionary[vehicleType];
  }

  // #endregion Private Methods (1)
}
