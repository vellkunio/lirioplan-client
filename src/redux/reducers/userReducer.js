import { SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

const initialState = {
    authenticated: false,
    credentials: {}
}


export default function user(state = initialState, action){
    switch (action.type) {
        case SET_AUTHENTICATED:
            return{
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return { 
                authenticated: true,
                ...action.payload
            };
        default:
            return state;
    }
}






















// import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

// //NO LIKES AND NOTIFICATIONS FOR NOW
// //Характеристики USER STATE
// const initialState = {
//     authenticated: false,
//     credentials: {}
// }

// export default function(state = initialState, action){
//     switch (action.type) {
//         case SET_AUTHENTICATED:
//             return{
//                 ...state,
//                 authenticated: true
//             };
//             // break;
//         case SET_UNAUTHENTICATED:
//             return initialState;
//         case SET_USER:
//             return { 
//                 authenticated: true,
//                 ...action.payload
//             };
//         default:
//             return state;
//     }
// }