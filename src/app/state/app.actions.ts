import { createAction, props } from "@ngrx/store";
import { VehicleEnum } from "../enums/vehicleType.enum";

export const setVehicleType = createAction('[App] Set vehicle type', props<{vehicleType: VehicleEnum}>())