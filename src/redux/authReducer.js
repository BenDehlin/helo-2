import axios from 'axios'
import actionTypes from './actionTypes'
const {GET_USER, REGISTER, LOGIN, LOGOUT, PENDING, FULFILLED, REJECTED} = actionTypes

const initialState = {
  user: {id: '', username: '', img: ''},
  loading: false,
  errorMessage: ''
}

export function getUser(){
  const payload = axios.get('/auth/user').then(results => {
    return results.data
  }).catch(err => err)
  return {
    type: GET_USER,
    payload
  }
}
export function register(body){
  const payload = axios.post(`/auth/register`, body).then(results => {
    return results.data
  }).catch(err => err)
  return {
    type: REGISTER,
    payload
  }
}
export function login(body){
  const payload = axios.post(`/auth/login`, body).then(results => {
    return results.data
  }).catch(err => err)
  return {
    type: LOGIN,
    payload
  }
}
export function logout(){
  const payload = axios.post('/auth/logout').catch(err => err)
  return {
    type: LOGOUT,
    payload: payload || {id: '', username: '', img: ''}
  }
}


export default function authReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    //GET_USER
    case GET_USER + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case GET_USER + FULFILLED:
      return {...state, user: payload, loading: false, errorMessage: ''}
    case GET_USER + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //REGISTER
    case REGISTER + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case REGISTER + FULFILLED:
      return {...state, user: payload, loading: false, errorMessage: ''}
    case REGISTER + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //LOGIN
    case LOGIN + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case LOGIN + FULFILLED:
      return {...state, user: payload, loading: false, errorMessage: ''}
    case LOGIN + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //LOGOUT
    case LOGOUT + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case LOGOUT + FULFILLED:
      return {...state, user: payload, loading: false, errorMessage: ''}
    case LOGOUT + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //DEFAULT
    default:
      return state
  }
}