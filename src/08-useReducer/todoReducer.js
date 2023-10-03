export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case '[TODO] Add todo':
            return [ ...initialState, action.payload ];
            break;
    
        default:
            return initialState;
    }
}