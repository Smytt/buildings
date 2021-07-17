import { useContext } from "react";
import { Button, Table } from "react-bootstrap"
import BuildingsProvider, { BuildingsContext } from "../../../providers/BuildingsProvider";
import Building from "../../common/Building";

import './buildings.css';

const Buildings = () => {
  const { buildings, setBuildings } = useContext(BuildingsContext);

  const handleAddBuilding = () => {
    
  }

  return (
    <div>
      <Button variant="success" className="mb-2" onClick={handleAddBuilding}>+</Button>
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
            buildings?.map(building => <Building building={building} />)
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Buildings;