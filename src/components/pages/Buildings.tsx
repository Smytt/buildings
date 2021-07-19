import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import BuildingProvider from "../../providers/BuildingProvider";
import { IBuilding } from "../../types";
import { fetchBuildings } from "../../utils";
import Building from "../common/Building";
import Header from "../common/Header";
import NewBuildingDialog from "../shared/NewBuildingDialog";


const Buildings = () => {

  const [loading, setLoading] = useState(true)
  const [buildings, setBuildings] = useState<IBuilding[]>([])

  useEffect(() => {
    fetchBuildings().then(buildings => {
      setBuildings(buildings);
      setLoading(false)
    })
  }, [])

  const handleSubmit = (id: string, building: IBuilding) => {
    setBuildings([
      ...buildings,
      building
    ])
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
      <Header />
      <div className="mb-2 text-end">
        <BuildingProvider>
          <NewBuildingDialog handleSubmit={handleSubmit} />
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
              <BuildingProvider building={building} key={building.id}>
                <Building
                  building={building}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              </BuildingProvider>
            )
          }
          {
            loading && <h2>loading...</h2>
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Buildings;