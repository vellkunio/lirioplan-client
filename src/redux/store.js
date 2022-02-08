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

const isGoogle = window.navigator.vendor.includes('Google Inc.');
const store = createStore (
    
    reducers,
    compose(
        applyMiddleware(...middleware),
        isGoogle ?
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
        // compose
    )
);


export default store;

//To see mobile website - comment below
    // const store = createStore (
    //     reducers,
    //     initialState,
    //     compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // )
//Up to here


//To see mobile website - uncomment below
    // const store = createStore (
    //     reducers,
    //     initialState,
    //     compose(applyMiddleware(...middleware))
    // )
//Up to here




// var store;



// if (window.navigator.userAgent.includes('Chrome')) {
//     store = createStore (
//         reducers,
//         initialState,
//         compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//     );
// } else {
//     store = createStore (
//         reducers,
//         initialState,
//         compose(applyMiddleware(...middleware))
//     )
// }






// const store = createStore (
//     reducers,
//     initialState,
//     compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

// export default store;















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





