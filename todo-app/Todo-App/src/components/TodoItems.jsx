import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {
    return <>
        <div className={styles.itemsContainer}>
            {
                todoItems.map((item) => (
                    <TodoItem todoItem={item.name}
                        todoDate={item.dueDate} />
                ))}
        </div>
    </>
}

export default TodoItems;