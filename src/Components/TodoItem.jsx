import styles from './todoitem.module.css'
export default function({todo, todos, seTtodos}) {
    function onDelete(todo) {
         console.log(`the deleted item is ${todo.name}`);
        seTtodos(todos.filter((item) => item != todo))
    }
    function handlecomplete(todo) {
       const newarray =  todos.map((item) => {
            if(item.name === todo.name) {
                 return {...item, done: !item.done}
            }
            return item;
        })
        seTtodos(newarray);
        
        
    }
     const daag = todo.done ? styles.completed: "";
    return (
        <div className= {styles.eachitem} >
           <span className={daag}  onClick={() => handlecomplete(todo)}><h3><li>{todo.name}</li></h3></span>
            <span className={styles.deleteIcon} onClick={() => onDelete(todo)}>🗑️</span>
        </div>
    )
}