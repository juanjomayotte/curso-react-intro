import { ToDoCounter } from '../ToDoCounter/Index';
import { ToDoSearch } from '../ToDoSearch/Index';
import { ToDoList } from '../ToDoList/Index';
import { ToDoItem } from '../ToDoItem/Index';
import { CreateToDoButton } from '../CreateToDoButton/index';
import { Logo } from '../Logo/Index';

function AppUI({
  completedToDos,
  totalToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
}) {
  return (
    <>
      <Logo />
      <ToDoCounter
        completed={completedToDos}
        total={totalToDos} 
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>
      
      <CreateToDoButton />
    </>
  );
}

export { AppUI };