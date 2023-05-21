import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
        } = useLocalStorage('toDOs_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;
    const searchedToDos= toDos.filter(
        (toDo) => {
        const searchText = searchValue.toLowerCase();
        const toDoText = toDo.text.toLowerCase();
        return toDoText.includes(searchText);
        }   
    );
    
    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
           text,
           completed: false,
        });
        saveToDos(newToDos);
    }

    const completeToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
        (toDo) => toDo.text === text
        );
        newToDos[toDoIndex].completed = true;
        saveToDos(newToDos);
        };
    
    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
        (toDo) => toDo.text === text
        );
        newToDos.splice(toDoIndex,1);
        saveToDos(newToDos);
    };

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo
        }}>
            {children}
        </ToDoContext.Provider>
    );
}

export {ToDoContext,ToDoProvider};