import { useState } from "react"
export default function Form({todos, seTtodos}) {
    const [item, seTitem] = useState("");
    function handleclick(event) {
        event.preventDefault();
        seTtodos([...todos, item]);
        seTitem("");
    }
    return (
        <form>
        <input
         type="text"
         value = {item}
         onChange={(event) => {seTitem(event.target.value)}}
         />
         <p>value is: {item}</p>
         <button onClick={handleclick} type="submit">
          Add me
         </button>
    </form>
    )
}