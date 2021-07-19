import { IBuilding } from "../../types";
import BuildingForm from "../forms/BuildingForm";
import ButtonWithModal from "./ButtonWithModal";
import { BuildingFormContext } from "../../providers/BuildingFormProvider";
import { useContext } from "react";

type Props = {
  handleSubmit: (id: string, building: IBuilding) => void,
}

const NewBuildingDialog: React.FC<Props> = ({ handleSubmit }) => {

  const { buildingData } = useContext(BuildingFormContext)

  return (
    <ButtonWithModal buttonText="+" handleSubmit={() => handleSubmit(buildingData.id, buildingData)} modalTitle="Add building">
      <BuildingForm />
    </ButtonWithModal>
  )
}

export default NewBuildingDialog;