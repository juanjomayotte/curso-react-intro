import './ToDoItem.css'

function ToDoItem(props) {
    return(
      <li className='ToDoItem'>
        <p className={`ToDo-p ${props.completed && " ToDo-p--complete"}`}>{props.text}</p>
        <span className={`done ${props.completed && "done-active"}`}
        onClick={props.onComplete}
        >V</span>
        <span className={`delete`}
        onClick={props.onDelete}
        >X</span>
      </li>  
      );
  }
export {ToDoItem}; 