import { useState } from "react"

export default function() {
    const [item, seTitem] = useState("");
    function handleclick(event) {
        event.preventDefault();
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
        </div>
    )
}