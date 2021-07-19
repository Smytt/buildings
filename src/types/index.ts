export type IBuilding = {
  id?: string,
  name?: string,
  area?: number,
  location?: string,
  image?: string
}

export type BuildingFormState = {
  errors?: {
    id?: string;
    name?: string;
    area?: string;
  }
  buildingData?: IBuilding
}