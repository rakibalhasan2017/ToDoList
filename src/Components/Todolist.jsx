import TodoItem from "./TodoItem";
import styles from './todolist.module.css'

export default function Todolist({todos, seTtodos}) {
    return (
        <div className={styles.list}>
             <ol>
            {todos.map((todo) => (
              <TodoItem key={todo} todo = {todo} todos = {todos} seTtodos = {seTtodos} />
            ))}
            </ol>
        </div>
    )
}