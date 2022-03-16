import { useRef } from 'react';
import { useStore, actions } from '../store'

function Header() {
    let [state, dispatch] = useStore();
    let { todo } = state;
    const inputElement = useRef();
    const { setTodoInput, addTodo } = actions;
    const handleKeyUp = (e) => {
        switch (e.keyCode) {
            case 13: // enter
                dispatch(addTodo(todo));
                dispatch(setTodoInput(''));
                break;
            case 27:
                inputElement.current.blur();
                break;
            default:
                break;
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                value={ todo }
                ref={inputElement}
                onChange={ (e) => dispatch(setTodoInput(e.target.value)) }
                onKeyUp={ handleKeyUp }
                className="new-todo"
                placeholder="What needs to be done?" 
                
            />
        </header>
    )
}


export default Header;

