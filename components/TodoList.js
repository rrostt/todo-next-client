import { useState } from 'react'
import styles from '../styles/home.module.css';
import { useTodos } from './useTodos';
import { Todo } from './Todo';
import { AddTodoForm } from './AddTodoForm'
import Button from './Button'

export const TodoList = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearTodos,
  } = useTodos();

  const [filter, setFilter] = useState('all')

  const filtered = todos.filter(todo => {
    if (filter === 'done') return todo.done
    if (filter === 'undone') return !todo.done
    return true
  })

  return <div className={styles.column}>
    <div>
      <button onClick={() => setFilter('done')}>Done</button>
      <button onClick={() => setFilter('undone')}>Undone</button>
      <button onClick={() => setFilter('all')}>All</button>
      {filter}
    </div>

    {filtered.map((todo, i) => <Todo 
      key={i} 
      todo={todo} 
      toggle={() => toggleTodo(i)} 
      onDelete={() => deleteTodo(i)}
    />)}

    <AddTodoForm onAdd={addTodo} />

    <Button style={{ marginTop: 10 }} onClick={() => clearTodos()}>Clear</Button>
  </div>;
};
