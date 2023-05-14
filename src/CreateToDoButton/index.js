import './CreateToDoButton.css'

function CreateToDoButton() {
    return(
        <button 
        className='createToDoButton'
        onClick={
          ()=> console.log('click mDF')
        }
        >+</button>
        );
  }
export {CreateToDoButton};  