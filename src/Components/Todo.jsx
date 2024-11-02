import { useState } from "react"
import Form from "./Form";
import Todolist from "./Todolist";

export default function() {
    const [todos, seTtodos] = useState([]);
    return (
        <div>
            <Form todos = {todos} seTtodos = {seTtodos} />
            <Todolist todos = {todos} />
        </div>
    )
}