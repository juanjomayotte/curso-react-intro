import React from 'react';
import './ToDoSearch.css';
import { ToDoContext } from '../ToDoContext/index';

function ToDoSearch(){
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(ToDoContext);
        return(
        <input
        placeholder="Busca To-DOs"
        value={searchValue}
        onChange={(event)=>{
        setSearchValue(event.target.value);
        }}        
        />        
        );
}

export {ToDoSearch}