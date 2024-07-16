const redux = require('redux')
const createStore = redux.legacy_createStore
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware


const initialState = {
    loading: false,
    users: [],
    error: ''.
}

const Fetch_Users_Requested = 'Fetch_Users_Requested'
const Fetch_Users_Succeeded = 'Fetch_Users_Succeeded'
const Fetch_Users_Failed = 'Fetch_Users_Failed'

const fetchUsersRequest = () => {
    return {
        type: Fetch_Users_Requested
    }
}

const fetchUsersSucceeded = (users) => {
    return {
        type: fetchUsersSucceeded,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: fetchUsersFailure,
        payload: error
    }
}
const reducer = (state = initialState, action) => {

    if (action.type === Fetch_Users_Requested) {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === Fetch_Users_Succeeded) {
        return {
            loading: false,
            users: action.payload,
            error: ''
        }
    }
    else if (action.type === Fetch_Users_Failed) {
        return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const fetchUsers = () =>{
    return function(dispatch) {

    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))