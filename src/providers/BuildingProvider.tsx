import React, { createContext, useReducer } from "react";
import { buildingFormReducer, BuildingFormState } from "../reducers/buildingFormReducer";
import { IBuilding } from "../types";

export const BuildingContext = createContext({} as any)

type Props = {
  building?: IBuilding;
}

const BuildingProvider: React.FC<Props> = ({ building, children }) => {

  const initialBuildingValues = {
    id: '',
    name: '',
    area: 0,
    location: '',
    image: '',
  }

  const [{ errors, buildingData }, dispatchBuilding] = useReducer(buildingFormReducer, {
    buildingData: building || initialBuildingValues,
    errors: {}
  });

  return (
    <BuildingContext.Provider value={{ errors, buildingData, originalBuilding: building || initialBuildingValues, dispatchBuilding }}>
      {children}
    </BuildingContext.Provider>
  )
}

export default BuildingProvider;