import React, {Component} from 'react'
import '../../App.css'
import './Post.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class BigPost extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      author_name: '',
      author_img: '',
      title: '',
      img: '',
      content: ''
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params
    axios.get(`/api/post/${id}`).then(results => {
      const {title, img, content, author_name, author_img} = results.data
      this.setState({id, author_name, author_img, title, img, content})
    })
  }

  render(){
    const {id, author_name, author_img, title, img, content} = this.state
    return (
      <div>
        <div className='author-info'>
          <span>{author_name}</span>
          <img src ={author_img || `https://robohash.org/${author_name}`} />
        </div>
        <div className='post-info'>
          <h1>{title}</h1>
          <img src = {img || 'https://placeholder.com/250'} /> 
          <p>{content}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(BigPost)