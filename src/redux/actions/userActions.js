import axios from 'axios';
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';

export const loginUser = (userData, history) => (dispatch) => {

    dispatch({ type: LOADING_UI });

    axios.post('/login', userData)
        .then(res => {
            const FBIdToken = `Bearer ${res.data.token}`;
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            axios.defaults.headers.common['Authorization'] = FBIdToken;
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        });
}


//Gets user data and triggers SET_USER action
export const getUserData = () => (dispatch) => {
    axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}


















// // import axios from 'axios';
// import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';

// export const loginUser = (userData, history) => (dispatch) => {

//     dispatch({ type: LOADING_UI });

//     axios.post('/login', userData)
//         .then(res => {

//             const FBIdToken = `Bearer ${res.data.token}`;
//             localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
//             axios.defaults.headers.common['Authorization'] = FBIdToken;
//             dispatch(getUserData()); // I DONT HAVE IT IN MY PROJECT
//             dispatch({ type: CLEAR_ERRORS});
//             history.push('/');
//         })
//         .catch(err => {
//             dispatch({
//                 type: SET_ERRORS,
//                 payload: err.responce.data
//             })
//         });
// }

// //I DONT HAVE IT IN MY PROJECT
// export const getUserData = () => (dispatch) => {
//     axios.get('/user')
//         .then(res => {
//             dispatch({
//                 type: SET_USER,
//                 payload: res.data
//             })
//         })
//         .catch(err => console.log(err));
// }