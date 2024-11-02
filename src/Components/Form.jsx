import { useState } from "react"
import styles from './form.module.css'

export default function Form({todos, seTtodos}) {
    const [item, seTitem] = useState("");
    function handleclick(event) {
        event.preventDefault();
        seTtodos([...todos, item]);
        seTitem("");
    }
    return (
        <form className={styles.todoform} >
        <input className={styles.moderninput}
         type="text"
         value = {item}
         onChange={(event) => {seTitem(event.target.value)}}
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