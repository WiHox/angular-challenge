import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehiclePreviewComponent } from './components/vehicle-preview/vehicle-preview.component';
import { VehicleInformationFormComponent } from './components/vehicle-information-form/vehicle-information-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { vehicleReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    VehiclePreviewComponent,
    VehicleInformationFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({vehicle: vehicleReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
