import React, {Component} from 'react'
import '../../App.css'
import './Form.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {postPost, putPost} from '../../redux/postReducer'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      author_id: '',
      title: '',
      img: '',
      content: '',
      editing: false
    }
  }
  componentDidMount(){
    const {id} = this.props.match.params
    const {user, history} = this.props
    if(!user.id){
      history.push('/login')
    }
    if(id){
      axios.get(`/api/post/${id}`).then(results => {
        const {title, img, content, author_id} = results.data
        if(author_id === user.id){
          this.setState({id, author_id, title, img, content, editing: true})
        }else{
          this.setState({author_id: user.id, editing: false})
        }
      }).catch(err => console.log(err))
    }
  }
  componentDidUpdate(prevProps){
    const {id} = this.props.match.params
    if(!id && this.props !== prevProps){
      this.setState({id: '', title: '', img: '', content: '', editing: false})
    }
  }
  handleChange = ({name, value}) => this.setState({[name]: value})
  handleSubmit = () => {
    const {id, title, img, content, editing} = this.state
    const {history, postPost, putPost, user} = this.props
    if(editing === true){
      putPost({id, author_id: user.id, title, img, content})
    }
    else{
      postPost({author_id: user.id, title, img, content})
    }
    history.push('/dashboard')
  }
  render(){
    const {title, img, content} = this.state
    return (
      <div className='form'>
        <div className='left-form'>
          <input
          name='title'
          value={title}
          placeholder='enter title'
          onChange = {(e) => this.handleChange(e.target)}
          />
          <input
          name='img'
          value={img}
          placeholder='enter url'
          onChange = {(e) => this.handleChange(e.target)}
          />
          <textarea
          name='content'
          value={content}
          placeholder='enter post content here'
          onChange = {(e) => this.handleChange(e.target)}
          />
          <button
          onClick = {() => this.handleSubmit()}
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
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {user}
}
const mapDispatchToProps = {postPost, putPost}

export default connect(mapStateToProps, mapDispatchToProps)(Form)