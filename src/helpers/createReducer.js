
const createReducer = (type, uniqueKey, notShowError) => (state = null, action) => {
    const { payload } = action;

    switch (action.type) {
        case type:
            return payload;
        case `${type}_CREATE`:
            return uniqueKey
                ? [ payload, ...state ]
                : payload;
        case `${type}_UPDATE`:
            return uniqueKey
                ? state.map(item => item[uniqueKey] === payload[uniqueKey]
                    ? { ...item, ...payload }
                    : item
                )
                : payload
        case `${type}_DELETE`:
            return uniqueKey
                ? state.filter(item => item[uniqueKey] !== payload[uniqueKey])
                : payload;
        default:
            return state;
    }
}

export default createReducer;
