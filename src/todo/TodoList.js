import TodoItem from "./TodoItem";
import { useStore, actions } from "../store"
function TodoList() {
    
    const [ state, dispatch ] = useStore();
    const { todos, filters, filter } = state;

    const { toggleAllTodo } = actions;

    return (
        <section className="main">
            <input 
                id="toggle-all" 
                className="toggle-all" 
                type="checkbox"
                onChange={(e) => { dispatch(toggleAllTodo()) }}
                checked={todos.every(filters['completed'])}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                { todos.filter(filters[filter]).map( (todo, index) => 
                    <TodoItem 
                        key={index}
                        todo={todo}
                        todoIndex={index}
                    /> )
                }
                
            </ul>
        </section>
    )
}

export default TodoList;