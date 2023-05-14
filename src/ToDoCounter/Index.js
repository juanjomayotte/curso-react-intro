import './ToDoCounter.css';

function ToDoCounter({ total, completed }) {
    return (
      <>
          <h1>
            Organiza tus actividades. Dale al botón "+" para agregar un to-DO
          </h1>
        {total === completed && (
          <h1>
            Felicidades! Completaste todos tus to-DOS 👏👏👏
          </h1>
        )}
        {total !== completed && (
          <h1>
          Has completado&nbsp;
          <span>{completed}</span>&nbsp;de&nbsp;<span>{total}</span>&nbsp;to-DOs.
          </h1>
          
        )}
      </>
    );
  }

export {ToDoCounter}