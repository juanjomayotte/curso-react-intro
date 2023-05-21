import React from "react";
import { ToDoContext } from '../ToDoContext/index'
import './ToDoForm.css'

function ToDoForm () {
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext)

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event)=>{
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false)
    };
    const onClose = ()=>{
    setOpenModal(false)
    };

    const onChange = (event)=>{
        setNewToDoValue(event.target.value);
        };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo to-DO ✍</label>
            <textarea
            placeholder="* Hacer ejercicio 💪"
            value={newToDoValue}
            onChange={onChange}
            />
            <div className="ToDoForm-button--container">
            <button
            type="button"
            className="ToDoForm-button ToDoForm-button--close"
            onClick={onClose}
            >Cerrar ✖</button>
            <button
            type="submit"
            className="ToDoForm-button ToDoForm-button--add"
            >Guardar to-DO 💡</button>

            </div>
        </form>
    )

};

export { ToDoForm };