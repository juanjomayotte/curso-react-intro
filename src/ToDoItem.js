import './ToDoItem.css'

function ToDoItem(props) {
    return(
      <li className='ToDoItem'>
        <p className={`ToDo-p ${props.completed && " ToDo-p--complete"}`}>{props.text}</p>
        <span className={`done ${props.completed && "done-active"}`}>V</span>
        <span className={`delete`}>X</span>
      </li>  
      );
  }
export {ToDoItem}; 