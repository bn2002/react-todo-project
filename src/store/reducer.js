import { 
    SET_TODO_INPUT, 
    ADD_TODO, 
    TOGGLE_DONE_TODO, 
    DELETE_TODO, 
    TOGGLE_ALL_TODO, 
    SET_EDIT_INDEX, 
    SET_EDIT_CONTENT,
    SAVE_NEW_TITLE_TODO,
    SET_FILTER,
    CLEAR_COMPLETED
} from './constants'

const initState = {
    todos: [],
    todo: '',
    editIndex: null,
    editContent: '',
    checkedAll: false,
    filter: 'all',
    filters: {
        all: () => true,
        completed: (todo) => todo.done === true,
        active: (todo) => !todo.done
    }
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            const todo = {
                title: action.payload,
                done: false,
            }
            return {
                ...state,
                todos: [...state.todos, todo]
            }
        case TOGGLE_DONE_TODO:
            let newState = JSON.parse(JSON.stringify(state));

            let todoIndex = action.payload;
            let { todos } = newState;
            todos[todoIndex].done = !todos[todoIndex].done;
            // console.log(newState)
            return {
                ...newState,
                filters: state.filters
            };
            
           
        case TOGGLE_ALL_TODO:
            let checkedAll = !state.checkedAll;
            state.todos = state.todos.map((todo) => {
                todo.done = checkedAll;
                return todo;
            });

            return {
                ...state,
                checkedAll
            }

        case DELETE_TODO:
                const newTodos = [...state.todos];
                newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos
            }
        
        case SET_EDIT_INDEX:
            return {
                ...state,
                editIndex: action.payload
            };
        
        case SET_EDIT_CONTENT:
            return {
                ...state,
                editContent: action.payload
            }
        
        case SAVE_NEW_TITLE_TODO:
            let editIndex = state.editIndex;
            let newTitle = state.editContent;
            state.todos[editIndex].title = newTitle;
            return {
                ...state
            }
        
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case CLEAR_COMPLETED:
            let newTodo = state.todos.filter(state.filters.active);
            return {
                ...state,
                todos: newTodo
            }
        default:    
            throw new Error('Invalid action');
    }
}

export { initState };
export default reducer;