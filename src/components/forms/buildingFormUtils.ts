import { BuildingFormState } from "../../reducers/buildingFormReducer"

export const setId = (payload: string): BuildingFormState => {
  if (payload.length > 0)
    return {
      errors: {
        id: undefined
      },
      buildingData: {
        id: payload
      }
    }
  return {
    errors: {
      id: 'ID is mandatory.'
    },
    buildingData: {
      id: undefined
    }
  }
}

export const setName = (payload: string): BuildingFormState => {
  if (payload.length > 3)
    return {
      errors: {
        name: undefined
      },
      buildingData: {
        name: payload
      }
    }
  return {
    errors: {
      name: 'Name must be at least 3 characters long.'
    },
    buildingData: {
      name: payload
    }
  }
}

export const setArea = (payload: number): BuildingFormState => {
  console.log(payload)
  if (payload > 0)
    return {
      errors: {
        area: undefined
      },
      buildingData: {
        area: payload
      }
    }
  return {
    errors: {
      area: 'Area has to be a positive number'
    },
    buildingData: {
      area: payload
    }
  }
}

export const setLocation = (payload: string): BuildingFormState => {
  return {
    buildingData: {
      location: payload
    }
  }
}

export const setImage = (payload: string): BuildingFormState => {
  return {
    buildingData: {
      image: payload
    }
  }
}