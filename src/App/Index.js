import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

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
    <AppUI
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );

}

export default App;
