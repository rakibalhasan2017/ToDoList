import { useState } from "react"
import Form from "./Form";
import Todolist from "./Todolist";
import { Footer } from "./Footer";

export default function() {
    const [todos, seTtodos] = useState([]);
    return (
        <div>
            <Form todos = {todos} seTtodos = {seTtodos} />
            <Todolist todos = {todos} seTtodos = {seTtodos} />
            <Footer todos = {todos} />
        </div>
    )
}