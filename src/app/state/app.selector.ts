import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectAppState = createFeatureSelector<AppState>('vehicle');


export const selectVehicleType = createSelector(selectAppState, (state: AppState) => state.vehicleType)
