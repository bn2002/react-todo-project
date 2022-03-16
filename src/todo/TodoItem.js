import { useStore, actions } from '../store'

function TodoItem( { todo, todoIndex} ) {
    const [state, dispatch] = useStore();

    const { toggleDoneTodo, deleteTodo, setEditIndex, setEditContent, saveNewTitleTodo } = actions;
    const handleDelete = () => {
        dispatch(deleteTodo(todoIndex));
    }

    const handleToggleDone = () => {
       dispatch(toggleDoneTodo(todoIndex))
    }

    const handleClickEdit = () => {
        dispatch(setEditIndex(todoIndex))
        dispatch(setEditContent(todo.title))
    }

    const cancelEdit = () => {
        dispatch(setEditIndex(null));
        dispatch(setEditContent(''))
    }

    const handleSaveEdit = (e) => {
        switch (e.keyCode) {
            case 13:
                if(state.editContent.trim() === '') {
                    dispatch(deleteTodo(state.editIndex));
                } else {
                    dispatch(saveNewTitleTodo());
                }
                
                cancelEdit();
                break;
            case 27:
                cancelEdit();
                break;
            default:
                break;
        }
    }

    return (
        <li className={` ${ todo.done ? 'completed' : '' } ${ state.editIndex === todoIndex ? 'editing' : ''} `}>
            <div className="view">
                <input 
                    className="toggle" 
                    type="checkbox"
                    onChange={handleToggleDone}
                    checked={ todo.done }
                />
                <label 
                    onDoubleClick={handleClickEdit}
                >{ todo.title }
                </label>
                <button onClick={ handleDelete } className="destroy"></button>
            </div>
            <input 
                className="edit" 
                value={ state.editContent }
                onChange={ (e) => {dispatch(setEditContent(e.target.value))}}
                onKeyUp={handleSaveEdit}
            />
        </li>
    )
}

export default TodoItem;