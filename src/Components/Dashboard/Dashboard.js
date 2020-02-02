import React, {Component} from 'react'
import '../../App.css'
import './Dashboard.css'
import {connect} from 'react-redux'
import {getUser} from '../../redux/authReducer'
import {getPosts} from '../../redux/postReducer'
import Post from '../Post/Post'

class Dashboard extends Component{
  componentDidMount(){
    const {getUser, getPosts} = this.props
    getUser()
    getPosts()
  }

  render(){
    const {posts} = this.props
    return(
      <div className = 'dashboard'>
        {posts && posts.map(post => {
          return (
            <Post key={post.id} post={post} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {posts} = state.postReducer
  return {
    posts
  }
}
const mapDispatchToProps = {
  getUser, getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)