import { IBuilding } from "../types";

export type BuildingFormState = {
  errors?: {
    id?: string;
    name?: string;
    area?: string;
  }
  buildingData?: IBuilding
}

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