import styles from '../styles/Todo.module.css'
import { Checkbox } from './Checkbox';

export const Todo = ({ toggle, todo }) => <div className={styles.todo}>
  <Checkbox value={todo.done} onChange={toggle} />
  <div>{todo.text}</div>
</div>;
