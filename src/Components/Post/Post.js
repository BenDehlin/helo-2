import React from 'react'
import '../../App.css'
import './Post.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePost} from '../../redux/postReducer'

function Post(props){
  const {id, author_id, author_name, author_img, title, img, content} = props.post
  const {deletePost, user, history} = props
  return(
    <div>
      <h1>{author_name}</h1>
      <h1>{title}</h1>
      {user.id === author_id &&
      <div>
        <button
        onClick = {() => {
          history.push(`/form/${id}`)
        }}
        >Edit</button>
        <button
        onClick = {() => {
          deletePost(id)
        }}
        >Delete</button>
      </div>      
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {
    user
  }
}

const mapDispatchToProps = {
  deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post))