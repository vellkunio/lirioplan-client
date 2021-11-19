import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

//IMPORT REDUCERS
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";


const initialState = {
    
};

//ADD COMBINE REDUCERS
const reducers = combineReducers({
    user: userReducer,
    UI: uiReducer
})


const middleware = [thunk];


const store = createStore (
    reducers,
    initialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


// const store = createStore (
//     userReducer,
//     initialState,
//     applyMiddleware(thunk)
// )

export default store;















// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';



// import userReducer from './reducers/userReducer';
// import dataReducer from './reducers/dataReducer';
// import uiReducer from './reducers/uiReducer';



// const initialState = {};

// const middleware = [thunk];

// const reducers = combineReducers({
//     user: userReducer,
//     data: dataReducer,
//     UI: uiReducer
// });

// const store = createStore(
//     reducers,
//     initialState,
//     compose(applyMiddleware(thunk))
        
//         // compose(
//         //     applyMiddleware(...middleware),
//         //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    
//         //     )

//         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

//         //compose(applyMiddleware(thunk))
//         //or
//         //composeWithDevTools(applyMiddleware(thunk))

//         // window.__REDUX_DEVTOOLS_EXTENSION__
//         // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// );

// export default store;




