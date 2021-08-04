import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

let destination = document.querySelector("#root");

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
);
