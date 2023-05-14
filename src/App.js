import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from  './CreateToDoButton';
import { Logo } from './logo';

import React from 'react';

// const defaultToDos = [
//   {text: 'Cortar cebolla', completed: false},
//    {text: 'Tomar el curso de NPM', completed: true},
//   {text: 'Tomar el curso de React', completed: false},
//   {text: 'Tomar el curso de CSS', completed: false}

// ]

// localStorage.setItem('toDOs_V1', JSON.stringify(defaultToDos));
// localStorage.removeItem('toDOs_V1'); 

function useLocalStorage(itemName, initialValue){
  
  const localStorageItem= localStorage.getItem(itemName);
  
  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem('itemName',JSON.stringify(initialValue));
    parsedItem= initialValue;
  } else {
    parsedItem= JSON.parse(localStorageItem);
  }

  const[item, setItem]= React.useState(parsedItem);

  const saveItem = (newItem)=> {
    localStorage.setItem('itemName', JSON.stringify(newItem))
    setItem(newItem);
  };
  return[item, saveItem];
}

function App() {
  

  const [toDos, saveToDos] = useLocalStorage('toDOs_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;
  const searchedToDos= toDos.filter((toDo) => {
    const searchText = searchValue.toLowerCase();
    const toDoText = toDo.text.toLowerCase();
    return toDoText.includes(searchText);
    }
  );
  


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
    <>
      <Logo />
      <ToDoCounter completed={completedToDos} total={totalToDos}/>  
      <ToDoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
        <ToDoList>
          {searchedToDos.map(toDo =>(
            <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete = {()=>completeToDo(toDo.text)}
            onDelete={()=> deleteToDo(toDo.text)}
            />
          ))}
        </ToDoList>

      <CreateToDoButton/>
    </>
  );
}

export default App;
