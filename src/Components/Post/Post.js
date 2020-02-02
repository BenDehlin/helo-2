import React from 'react'
import '../../App.css'
import './Post.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePost} from '../../redux/postReducer'
import {TiDeleteOutline, TiEdit, TiZoomOutline} from 'react-icons/ti'

function Post(props){
  const {id, author_id, author_name, title,} = props.post
  const {deletePost, user, history} = props
  return(
    <div className='post'>
      <h1>{author_name}</h1>
      <h1>{title}</h1>
      <div className='buttons'>
      <TiZoomOutline
      className = 'icon'
        onClick = {() => {
          history.push(`/post/${id}`)
        }}
        />
      {user.id === author_id &&
      <span className='buttons buttons-span'>
        <TiEdit
        className = 'icon'
        onClick = {() => {
          history.push(`/form/${id}`)
        }}
        />
          <TiDeleteOutline
          className = 'icon delete-icon'
          onClick = {() => {
            deletePost(id)
          }}
          />
      </span>
      }
      </div>
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