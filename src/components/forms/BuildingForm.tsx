import { useContext, useReducer } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { setArea, setId, setImage, setLocation, setName } from "./buildingFormUtils";
import { buildingFormReducer } from "../../reducers/buildingFormReducer";
import { IBuilding } from "../../types";
import { BuildingContext } from "../../providers/BuildingProvider";

type Props = {
  building?: IBuilding
}

const BuildingForm: React.FC<Props> = () => {

  const { errors, buildingData, dispatchBuilding } = useContext(BuildingContext)

  const { id, name, area, location, image } = buildingData as IBuilding;

  return (
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          ID *
        </Form.Label>
        <Col sm="9">
          <Form.Control type="plaintext" value={id || ''} onChange={(e) => dispatchBuilding(setId(e.target.value))} />
        </Col>
        {
          errors?.id && <p className="text-danger">{errors.id}</p>
        }
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Name *
        </Form.Label>
        <Col sm="9">
          <Form.Control type="plaintext" value={name || ''} onChange={(e) => dispatchBuilding(setName(e.target.value))} />
        </Col>
        {
          errors?.name && <p className="text-danger">{errors.name}</p>
        }
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Area *
        </Form.Label>
        <Col sm="9">
          <Form.Control type="number" value={area || ''} onChange={(e) => dispatchBuilding(setArea(+e.target.value))} />
        </Col>
        {
          errors?.area && <p className="text-danger">{errors.area}</p>
        }
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Location
        </Form.Label>
        <Col sm="9">
          <Form.Control type="plaintext" value={location || ''} onChange={(e) => dispatchBuilding(setLocation(e.target.value))} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Image URL
        </Form.Label>
        <Col sm="9">
          <Form.Control type="plaintext" value={image || ''} onChange={(e) => dispatchBuilding(setImage(e.target.value))} />
        </Col>
      </Form.Group>
    </Form>
  )
}

export default BuildingForm;