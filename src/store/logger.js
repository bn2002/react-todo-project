function logger(reducer) {
    return (state, action) => {
        console.group(action.type);
            console.log('PreState', state);
            const newState = reducer(state, action);
            console.log('NextState', newState);
        console.groupEnd();
            return newState;
        
    }
}

export default logger;