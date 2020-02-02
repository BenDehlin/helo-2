require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env
const authCtrl = require('./controllers/authController')
const postCtrl = require('./controllers/postController')

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database connected')
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))

//ENDPOINTS
//auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//post endpoints
app.get('/api/post/:id', postCtrl.getPost)
app.get('/api/posts', postCtrl.getPosts)
app.post('/api/post', postCtrl.postPost)
app.put('/api/post/:id', postCtrl.putPost)
app.delete('/api/post/:id', postCtrl.deletePost)