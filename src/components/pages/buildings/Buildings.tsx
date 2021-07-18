import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import BuildingProvider from "../../../providers/BuildingProvider";
import { IBuilding } from "../../../types";
import { buildings_mock } from "../../../_mockData/buildings";
import { RESPONSE_TIME } from "../../../_mockData/constants";
import Building from "../../common/Building";
import BuildingForm from "../../forms/BuildingForm";
import ButtonWithModal from "../../shared/ButtonWithModal";

import './buildings.css';

const Buildings = () => {

  const [buildings, setBuildings] = useState<IBuilding[]>([])

  useEffect(() => {
    setTimeout(() => {
      setBuildings(buildings_mock)
    }, RESPONSE_TIME);
  }, [])

  const handleSubmit = () => {

  }

  const handleDelete = (id: string) => {
    setBuildings(buildings.filter(building => building.id !== id))
  }

  const handleUpdate = (id: string, building: IBuilding) => {
    const index = buildings.findIndex(building => building.id === id) 
    const newBuildings = [...buildings];
    newBuildings[index] = building;
    setBuildings([...newBuildings])
  }

  return (
    <div>
      <div className="mb-2">
        <BuildingProvider>
          <ButtonWithModal buttonText="+" handleSubmit={handleSubmit} modalTitle="Add building">
            <BuildingForm />
          </ButtonWithModal>
        </BuildingProvider>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Area</th>
            <th>Location</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            buildings?.map(building =>
              <BuildingProvider building={building}>
                <Building
                  key={building.id}
                  building={building}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              </BuildingProvider>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Buildings;