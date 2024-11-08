import { useState } from "react"
import styles from './form.module.css'

export default function Form({todos, seTtodos}) {
    const [item, seTitem] = useState({name: "", done: false});
    function handleclick(event) {
        event.preventDefault();
        seTtodos([...todos, item]);
        seTitem({name: "", done: false});
    }
    return (
        <form className={styles.todoform} >
        <input className={styles.moderninput}
         type="text"
         value = {item.name}
         onChange={(event) => {seTitem({name: event.target.value, done: false})}}
         placeholder="enter the item"
         />
         <button
          onClick={handleclick}
           type="submit"
           className={styles.modernbutton} >
          Add me
         </button>
    </form>
    )
}