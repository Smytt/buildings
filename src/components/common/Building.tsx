import { IBuilding } from "../../types";
import * as Icon from 'react-bootstrap-icons';
import { Button, ButtonGroup } from "react-bootstrap";

type Props = {
  building: IBuilding
}

const Building: React.FC<Props> = ({
  building: { id, name, area, location, image }
}) => {
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
          <Button variant="warning"><Icon.Pencil /></Button>
          <Button variant="danger"><Icon.Trash /></Button>
        </ButtonGroup>
      </td>
    </tr>
  )
}

export default Building;