import { ReactComponent as CompleteIcon } from './assets/img/CompleteIcon.svg';
import { ReactComponent as DeleteIcon } from './assets/img/DeleteIcon.svg';
import './ToDoIcon.css';

const iconTypes = {
  "check": (color) => <CompleteIcon className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteIcon className="Icon-svg" fill={color} />,
};

function ToDoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export{ToDoIcon};