import styles from './todoitem.module.css'
export default function({todo, todos, seTtodos}) {
    function onDelete(todo) {
        // console.log(`the deleted item is ${todo}`);
        seTtodos(todos.filter((item) => item != todo))
        
    }
    return (
        <div className= {styles.eachitem} >
            <h3><li>{todo}</li></h3>
            <span className={styles.deleteIcon} onClick={() => onDelete(todo)}>🗑️</span>
        </div>
    )
}