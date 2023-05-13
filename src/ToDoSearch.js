import React from 'react';

import './ToDoSearch.css';

function ToDoSearch({
    searchValue,
    setSearchValue,
}){
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