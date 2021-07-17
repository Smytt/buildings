export type IBuilding = {
  id: string,
  name: string,
  area: number,
  location?: string,
  image?: string
}

export type IBuildingsContext = {
  buildings: IBuilding[],
  setBuildings: (buildings: IBuilding[]) => void
}