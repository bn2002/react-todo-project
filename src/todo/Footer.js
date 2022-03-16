import { useStore, actions } from '../store'

function Footer() {
    const [state, dispatch] = useStore();
    const { todos, filters, filter } = state;
    const { setFilter, clearCompleted } = actions;
    return (
        <footer className="footer">
                <span className="todo-count"><strong>{ todos.filter(filters.active).length }</strong> item left</span>
                    <ul className="filters">
                        {Object.keys(filters).map((key) => (
                            <li key={key}>
                                <a 
                                    className={`${filter === key ? 'selected' : ''}`} 
                                    href="/#"
                                    onClick={ (e) => { dispatch(setFilter(key)) } }
                                >
                                    {key[0].toUpperCase() + key.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button 
                        className="clear-completed"
                        onClick={_ => { dispatch(clearCompleted()) }}
                    >
                        Clear completed
                    </button>
                
            </footer>
    )
}

export default Footer;