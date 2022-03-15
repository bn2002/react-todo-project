function TodoItem() {
    return (
        <li className="completed">
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox" 
                    
                    
                />
                <label>title</label>
                <button className="destroy"></button>
            </div>
            <input 
                className="edit" 
                value="title"
            />
        </li>
    )
}

export default TodoItem;