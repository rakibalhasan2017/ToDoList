import styles from './footer.module.css';

export function Footer({ todos }) {
    const totaltask = todos.length;
    let count = 0;
    todos.forEach((todo) => {
        if (todo.done) {
            count++;
        }
    });

    return (
        <div className={styles.footerContainer}>
            <h1 className={styles.footerText}>
                Total Task: {totaltask}
                <br />
                Completed Task: {count}
            </h1>
        </div>
    );
}
