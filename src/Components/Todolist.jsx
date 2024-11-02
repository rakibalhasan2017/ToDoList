import TodoItem from "./TodoItem";
export default function Todolist({todos}) {
    return (
        <div>
             <ol>
            {todos.map((todo) => (
              <TodoItem key={todo} todo = {todo}/>
            ))}
            </ol>
        </div>
    )
}