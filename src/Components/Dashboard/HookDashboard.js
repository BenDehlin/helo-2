import React, {useEffect} from 'react'
import '../../App.css'
import './Dashboard.css'
import {connect} from 'react-redux'
import {getUser} from '../../redux/authReducer'
import {getPosts} from '../../redux/postReducer'
import Post from '../Post/Post'

const Dashboard = ({getUser, getPosts, posts}) => {


  useEffect(() =>{
    getUser()
    getPosts()
  }, [getUser, getPosts])

  return (
    <div className = 'dashboard'>
      {posts && posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {posts} = state.postReducer
  return {posts}
}

const mapDispatchToProps = {
  getUser, getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)