import { BuildingFormState, IBuilding } from "../types";

export const buildingFormReducer = (state: BuildingFormState, payload: any): BuildingFormState => {
  return {
    ...state,
    errors: {
      ...state.errors,
      ...payload.errors
    },
    buildingData: {
      ...state.buildingData,
      ...payload.buildingData
    }
  }
}