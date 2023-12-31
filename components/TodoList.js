import { useState } from 'react'
import styles from '../styles/home.module.css';
import { useTodos } from './useTodos';
import { Todo } from './Todo';
import { AddTodoForm } from './AddTodoForm'

export const TodoList = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
  } = useTodos();

  return <div className={styles.column}>
    {todos.map((todo, i) => <Todo 
      key={i} 
      todo={todo} 
      toggle={() => toggleTodo(i)} 
    />)}
  </div>;
};
