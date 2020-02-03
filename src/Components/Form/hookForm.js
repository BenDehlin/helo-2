import React, {useState, useEffect} from 'react'
import '../../App.css'
import './Form.css'
import {connect} from 'react-redux'
import {postPost, putPost} from '../../redux/postReducer'
import axios from 'axios'

const Form = ({history, postPost, putPost, user, match}) => {
  const [state, setState] = useState({
    id: match.id,
    title: '',
    img: '',
    content: '',
    editing: false
  })
  const {id, title, img, content, editing} = state
  useEffect(() =>{
    const {id} = match.params
    if(!user.id){
      history.push('/login')
    }
    if(id){
      axios.get(`/api/post/${id}`).then(results => {
        const {title, img, content, author_id} = results.data
        if(author_id === user.id){
          setState({...state, id, title, img, content, editing: true})
        }else{
          setState({...state, editing: false})
        }
      }).catch(err => console.log(err))
    }
  }, [])

  useEffect(() => {
    setState({...state, id: '', title: '', img: '', content: '', editing: false})
  }, [match.params])

  const handleChange = ({name, value}) => setState({...state, [name]: value})
  const handleSubmit = () => {
    if(editing === true){
      putPost({id, author_id: user.id, title, img, content})
    }else{
      postPost({author_id: user.id, title, img, content})
    }
    history.push('/dashboard')
  }

  return (
    <div className='form'>
    <div className='left-form'>
      <input
      name='title'
      value={title}
      placeholder='enter title'
      onChange = {(e) => handleChange(e.target)}
      />
      <input
      name='img'
      value={img}
      placeholder='enter url'
      onChange = {(e) => handleChange(e.target)}
      />
      <textarea
      name='content'
      value={content}
      placeholder='enter post content here'
      onChange = {(e) => handleChange(e.target)}
      />
      <button
      onClick = {() => handleSubmit()}
      >Submit</button>
    </div>
    <div className='right-form'>
      <img 
      src={img || 'https://via.placeholder.com/250'} 
      alt={title}
      className='post-img' />
    </div>
  </div> 
  )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {user}
}

const mapDispatchToProps = {postPost, putPost}

export default connect(mapStateToProps, mapDispatchToProps)(Form)