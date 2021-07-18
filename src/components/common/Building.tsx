import { IBuilding } from "../../types";
import * as Icon from 'react-bootstrap-icons';
import { Button, ButtonGroup } from "react-bootstrap";
import BuildingForm from "../forms/BuildingForm";
import ButtonWithModal from "../shared/ButtonWithModal";
import BuildingProvider, { BuildingContext } from "../../providers/BuildingProvider";
import { useContext } from "react";

type Props = {
  building: IBuilding,
  handleDelete: (id: string) => void,
  handleUpdate: (id: string, building: IBuilding) => void,
}

const Building: React.FC<Props> = ({ building, handleDelete, handleUpdate }) => {
  const { id, name, area, location, image } = building;
  
  const { buildingData } = useContext(BuildingContext)

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{area}</td>
      <td>
        {
          location || <em className="text-danger">No location provided</em>
        }
      </td>
      <td>
        {
          image
            ? <img className="property-image" src={image} alt="" />
            : <em className="text-danger">No image provided</em>
        }
      </td>
      <td>
        <ButtonGroup>
            <ButtonWithModal buttonText="Edit" handleSubmit={() => handleUpdate(building.id!, buildingData)} modalTitle={`Edit ${building.name}`}>
              <BuildingForm />
            </ButtonWithModal>
            <Button variant="danger" onClick={() => handleDelete(building.id!)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  )
}

export default Building;