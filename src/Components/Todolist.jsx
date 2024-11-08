import TodoItem from "./TodoItem";
import styles from './todolist.module.css'

export default function Todolist({todos, seTtodos}) {
    return (
        <div className={styles.list}>
             <ol>
            {todos.map((todo, index) => (
              <TodoItem key={todo.name} todo = {todo} todos = {todos} seTtodos = {seTtodos} />
            ))}
            </ol>
        </div>
    )
}