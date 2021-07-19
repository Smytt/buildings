import { IBuilding } from "../types";
import { buildings_mock } from "../_mockData/buildings";
import { RESPONSE_TIME } from "../_mockData/constants";

export const fetchBuildings = (): Promise<IBuilding[]> => new Promise((res, rej) => {
  setTimeout(() => {
    res(buildings_mock)
  }, RESPONSE_TIME);
})