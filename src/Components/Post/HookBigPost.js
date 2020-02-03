import React from 'react'
import '../../App.css'
import './Post.css'
import {withRouter} from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

const BigPost = ({match}) => {
  const [state, setState] = useAxios(`/api/post/${match.params.id}`)
  const {author_name, author_img, title, img, content} = state
  // const [state, setState] = useState({
  //   author_name: '',
  //   author_img: '',
  //   title: '',
  //   img: '',
  //   content: ''
  // })


  // useEffect(() => {
  //   axios.get(`/api/post/${match.params.id}`).then(results => {
  //     const {title, img, content, author_name, author_img} = results.data
  //     setState({...state, title, img, content, author_name, author_img})
  //   })
  // }, [match.params.id])

  return(
    <div>
      <div className = 'author-info'>
        <span>{author_name}</span>
        <img src = {author_img || `https://robohash.org/${author_name}`}
        alt='profile'
        />
        <div className='post-info'>
          <h1>{title}</h1>
          <img src = {img || 'https://placeholder.com/250'}
          alt = 'post'
          />
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(BigPost)