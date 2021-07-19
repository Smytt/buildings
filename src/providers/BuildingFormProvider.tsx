import React, { createContext, useReducer } from "react";
import { buildingFormReducer } from "../reducers/buildingFormReducer";
import { IBuilding } from "../types";

export const BuildingFormContext = createContext({} as any)

type Props = {
  building?: IBuilding;
}

const BuildingFormProvider: React.FC<Props> = ({ building, children }) => {

  const initialBuildingValues = {
    id: '',
    name: '',
    area: 0,
    location: '',
    image: '',
  }

  const [{ errors, buildingData }, dispatchBuildingForm] = useReducer(buildingFormReducer, {
    buildingData: building || initialBuildingValues,
    errors: {}
  });

  return (
    <BuildingFormContext.Provider value={{ errors, buildingData, originalBuilding: building || initialBuildingValues, dispatchBuildingForm }}>
      {children}
    </BuildingFormContext.Provider>
  )
}

export default BuildingFormProvider;