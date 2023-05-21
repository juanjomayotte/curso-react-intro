import React from 'react';
import { ToDoCounter } from '../ToDoCounter/Index';
import { ToDoSearch } from '../ToDoSearch/Index';
import { ToDoList } from '../ToDoList/Index';
import { ToDoItem } from '../ToDoItem/Index';
import { CreateToDoButton } from '../CreateToDoButton/index';
import {ToDoLoading} from '../ToDoLoading/index';
import {ToDoError} from '../ToDoError/index';
import {EmptyToDos} from '../EmptyToDos/index';
import { Logo } from '../Logo/Index';
import { Modal } from '../Modal/index';
import { ToDoForm } from '../ToDoForm/index.js';
import { ToDoContext } from '../ToDoContext';


function AppUI() {
  const {
    loading,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext)
  return (
    <>
      <Logo />
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
      {loading && <ToDoLoading/>}
      {error && <ToDoError/>}
      {(!loading && searchedToDos.length===0) && <EmptyToDos/>}
      
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
      <CreateToDoButton setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
          <ToDoForm/>
      </Modal>
      )}
    </>
  );
}

export { AppUI };