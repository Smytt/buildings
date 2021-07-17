import React, { createContext, useEffect, useState } from "react";
import { IBuilding, IBuildingsContext } from "../types";
import { buildings_mock } from "../_mockData/buildings";
import { RESPONSE_TIME } from "../_mockData/constants";

export const BuildingsContext = createContext<IBuildingsContext>({} as IBuildingsContext);

const BuildingsProvider: React.FC<any> = ({ children }) => {

  const [buildings, setBuildings] = useState<IBuilding[]>([])

  useEffect(() => {
    setTimeout(() => {
      setBuildings(buildings_mock)
    }, RESPONSE_TIME);
  }, [])

  return (
    <BuildingsContext.Provider value={{ buildings, setBuildings }} >
      {children}
    </BuildingsContext.Provider>
  )
}

export default BuildingsProvider;