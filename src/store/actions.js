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

export const setTodoInput = (payload) => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

export const toggleDoneTodo = (payload) => {
    return {
        type: TOGGLE_DONE_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const toggleAllTodo = (payload) => {
    return {
        type: TOGGLE_ALL_TODO,
    }
}

export const setEditIndex = (payload) => {
    return {
        type: SET_EDIT_INDEX,
        payload
    }
}

export const setEditContent = (payload) => {
    return {
        type: SET_EDIT_CONTENT,
        payload
    }
}

export const saveNewTitleTodo = (payload) => {
    return {
        type: SAVE_NEW_TITLE_TODO
    }
}

export const setFilter = (payload) => {
    return {
        type: SET_FILTER,
        payload
    }
}

export const clearCompleted = (payload) => {
    return {
        type: CLEAR_COMPLETED
    }
}