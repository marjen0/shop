import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './actionTypes';
import axios from 'axios';
import { returnErros } from './error'

export const loadUser = () => (dispatch,getState) => {
    dispatch({type: USER_LOADING});
    axios.get('/api/users/user',tokenConfig(getState))
    .then(res => dispatch({
        type:USER_LOADED,
        payload: res.data
    }))
    .catch(error => {
        dispatch(returnErros(error.response.data,error.response.status))
        dispatch({
            type: AUTH_ERROR
        });
    });
}
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}
export const login = ({email,password}) => dispatch => {
    const body = {email,password};
    axios.post('/api/authentication/login',body)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => {
        dispatch(returnErros(error.response.data,error.response.status, 'LOGIN_FAIL'))
        dispatch({
            type: LOGIN_FAIL
        })
    })
}
export const register = ({email,password1,password2}) => dispatch => {
    const body = {email,password1,password2};
    axios.post('/api/authentication/register',body)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => {
        dispatch(returnErros(error.response.data,error.response.status, 'REGISTER_FAIL'))
        dispatch({
            type: REGISTER_FAIL
        })
    })
}
//setup config/headers ant token
const tokenConfig = (getState) => {
     //get token from local storage
    const token = getState().auth.token;
     //headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    // iftoken add to headers
    if(token){
       config.headers['x-auth-token'] = token;
    }
    return config;
}