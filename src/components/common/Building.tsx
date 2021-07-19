import { IBuilding } from "../../types";
import { ButtonGroup } from "react-bootstrap";
import BuildingForm from "../forms/BuildingForm";
import ButtonWithModal from "../shared/ButtonWithModal";
import { BuildingFormContext } from "../../providers/BuildingFormProvider";
import { useContext } from "react";

type Props = {
  building: IBuilding,
  handleDelete: (id: string) => void,
  handleUpdate: (id: string, building: IBuilding) => void,
}

const Building: React.FC<Props> = ({ building, handleDelete, handleUpdate }) => {
  const { id, name, area, location, image } = building;

  const { buildingData } = useContext(BuildingFormContext)

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
          <ButtonWithModal variant="success" buttonText="Edit" handleSubmit={() => handleUpdate(building.id!, buildingData)} modalTitle={`Edit ${building.name}`}>
            <BuildingForm />
          </ButtonWithModal>
          <ButtonWithModal variant="danger" buttonText="Delete" handleSubmit={() => handleDelete(building.id!)} modalTitle={`Delete ${building.name}?`}>
            <p>{`Are you sure you want to delete ${building.name}?`}</p>
          </ButtonWithModal>
        </ButtonGroup>
      </td>
    </tr>
  )
}

export default Building;