import './CreateToDoButton.css'

function CreateToDoButton({setOpenModal}) {
    return(
        <div className='createToDoButton-container'>
          <button 
            className='createToDoButton'
            onClick={
              ()=> {
                setOpenModal(state=>!state);
              }
            }
            >+</button>
        </div>
        
        );
  }
export {CreateToDoButton};  