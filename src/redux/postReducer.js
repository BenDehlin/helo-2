import axios from 'axios'
import actionTypes from './actionTypes'

const initialState = {
  posts: [],
  post: {id: '', author_id: '', author_name: '', 
  author_img: '', title: '', img: '', content: ''},
  loading: false,
  errorMessage: ''
}
const {GET_POST, GET_POSTS, POST_POST, PUT_POST, DELETE_POST, PENDING, FULFILLED, REJECTED} = actionTypes

export function getPost(id){
  const payload = axios.get(`/api/post/${id}`).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return{
    type: GET_POST,
    payload
  }
}
export function getPosts(){
  const payload = axios.get('/api/posts').then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: GET_POSTS,
    payload
  }
}

export function postPost(body){
  const payload = axios.post('/api/post', body).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: POST_POST,
    payload
  }
}

export function putPost(body){
  const payload = axios.put(`/api/post/${body.id}`, body).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: PUT_POST,
    payload
  }
}

export function deletePost(id){
  const payload = axios.delete(`/api/post/${id}`).then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: DELETE_POST,
    payload
  }
}

export default function postReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    //GET_POST
    case GET_POST + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case GET_POST + FULFILLED:
      return {...state, post: payload, loading: false, errorMessage: ''}
    case GET_POST + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //GET_POSTS
    case GET_POSTS + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case GET_POSTS + FULFILLED:
      return {...state, posts: payload, loading: false, errorMessage: ''}
    case GET_POSTS + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //POST_POST
    case POST_POST + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case POST_POST + FULFILLED:
      return {...state, posts: payload, loading: false, errorMessage: ''}
    case POST_POST + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //PUT_POST
    case PUT_POST + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case PUT_POST + FULFILLED:
      return {...state, posts: payload, loading: false, errorMessage: ''}
    case POST_POST + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //DELETE_POST
    case DELETE_POST + PENDING:
      return {...state, loading: true, errorMessage: ''}
    case DELETE_POST + FULFILLED:
      return {...state, posts: payload, loading: false, errorMessage: ''}
    case DELETE_POST + REJECTED:
      return {...state, loading: false, errorMessage: payload}
    //DEFAULT
    default:
      return state
  }
}