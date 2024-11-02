import styles from './todoitem.module.css'
export default function({todo}) {
    return (
        <div className= {styles.eachitem} >
            <h3><li>{todo}</li></h3>
        </div>
    )
}