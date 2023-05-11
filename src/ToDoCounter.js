import './ToDoCounter.css';

function ToDoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">
        Has completado&nbsp;
        <span>{completed}</span>&nbsp;de&nbsp;<span>{total}</span>&nbsp;to-DOs.
        </h1>
    );
  }

export {ToDoCounter}