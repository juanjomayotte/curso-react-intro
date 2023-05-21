import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';

function ToDoCounter() {
    const {
      completedToDos,
      totalToDos
    } = React.useContext(ToDoContext);  
    return (
      <>
        {(totalToDos === completedToDos) && (totalToDos >=1) && (
          <h1 className='felicidades'>
            Felicidades! Completaste todos tus to-DOS!<br />👏👏👏
          </h1>
        )}
        {totalToDos !== completedToDos && (
          <h1>
          Has completado&nbsp;
          <span>{completedToDos}</span>&nbsp;de&nbsp;<span>{totalToDos}</span>&nbsp;to-DOs.
          </h1>
          
        )}
      </>
    );
  }

export {ToDoCounter}