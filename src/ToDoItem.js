import './ToDoItem.css'

function ToDoItem(props) {
    return(
      <li>
        <p>{props.text}</p>
        <span className='done'>V</span>
        <span className='delete'>X</span>
      </li>  
      );
  }
export {ToDoItem}  