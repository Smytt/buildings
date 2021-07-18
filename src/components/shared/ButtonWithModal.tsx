import { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BuildingContext } from '../../providers/BuildingProvider';

type Props = {
  buttonText: string;
  modalTitle: string;
  handleSubmit: () => void;
}

const ButtonWithModal: React.FC<Props> = ({ buttonText, modalTitle, handleSubmit, children }) => {

  const [showModal, setShowModal] = useState(false)

  const { errors, buildingData, originalBuilding, dispatchBuilding } = useContext(BuildingContext)

  const shouldDisableSubmit = () => {
    if (!buildingData.id || !buildingData.name || !buildingData.area)
      return true
    else
      return Object.values(errors!).some(value => value !== undefined)
  }

  const handleCloseModal = () => {
    dispatchBuilding({
      errors: {},
      buildingData: { ...originalBuilding }
    })
    setShowModal(false);
  }

  const handleModalSubmit = () => {
    handleSubmit();
    setShowModal(false);
  }

  return (
    <>
      <Button variant="success" onClick={() => setShowModal(true)}>{buttonText}</Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModalSubmit} disabled={shouldDisableSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ButtonWithModal