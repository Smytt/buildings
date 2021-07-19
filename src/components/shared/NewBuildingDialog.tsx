import { IBuilding } from "../../types";
import { ButtonGroup } from "react-bootstrap";
import BuildingForm from "../forms/BuildingForm";
import ButtonWithModal from "./ButtonWithModal";
import { BuildingContext } from "../../providers/BuildingProvider";
import { useContext } from "react";

type Props = {
  handleSubmit: (id: string, building: IBuilding) => void,
}

const NewBuildingDialog: React.FC<Props> = ({ handleSubmit }) => {

  const { buildingData } = useContext(BuildingContext)

  return (
    <ButtonWithModal buttonText="+" handleSubmit={() => handleSubmit(buildingData.id, buildingData)} modalTitle="Add building">
      <BuildingForm />
    </ButtonWithModal>
  )
}

export default NewBuildingDialog;