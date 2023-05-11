import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from  './CreateToDoButton';
import { Logo } from './logo';

import React from 'react';

const defaultToDos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de NPM', completed: true},
  {text: 'Tomar el curso de React', completed: false},
  {text: 'Tomar el curso de CSS', completed: false}

]

function App() {
  return (
    <>
       <Logo />
      <ToDoCounter completed={16} total={25}/>  
      <ToDoSearch/>
        <ToDoList>
          {defaultToDos.map(todo =>(
            <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
          ))}
        </ToDoList>

      <CreateToDoButton/>
    </>
  );
}

export default App;
