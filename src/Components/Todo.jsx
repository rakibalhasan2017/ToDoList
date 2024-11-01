import { useState } from "react"
import TodoItem from "./TodoItem";

export default function() {
    const [item, seTitem] = useState("");
    const [todos, seTtodos] = useState([]);
    function handleclick(event) {
        event.preventDefault();
        seTtodos([...todos, item]);
        seTitem("");
    }
    return (
        <div>
            <form>
                <input
                 type="text"
                 value = {item}
                 onChange={(event) => {seTitem(event.target.value)}}
                 />
                 <p>value is: {item}</p>
                 <button onClick={handleclick}>
                  Add me
                 </button>
            </form>
            <ol>
            {todos.map((todo) => (
              <TodoItem key={todo} todo = {todo}/>
            ))}
            </ol>
            
        </div>
    )
}