import styles from '../styles/home.module.css'
import { TodoList } from '../components/TodoList'

const Home = () => {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  )
}

export default Home
