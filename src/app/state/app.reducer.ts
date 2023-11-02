import { createReducer, on } from "@ngrx/store";
import { VehicleEnum } from "../enums/vehicleType.enum";
import { AppState } from "./app.state";
import { setVehicleType } from "./app.actions";

export const initialState: AppState = {
    vehicleType: VehicleEnum.Auto
}

const vehicleTypeReducer = createReducer<AppState>(
    initialState,
    on(setVehicleType,(state,  vType ) => ({
        ...state,
        vehicleType: vType.vehicleType
    }))
)

export function vehicleReducer(state: AppState = initialState, action: any) {
    return vehicleTypeReducer(state, action);
}
