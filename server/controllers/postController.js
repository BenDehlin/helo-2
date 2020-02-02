module.exports = {
  getPost: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.get_post(id).then(results => {
      res.status(200).send(results[0])
    }).catch(err => res.status(500).send(err))
  },
  getPosts: (req, res) => {
    const db = req.app.get('db')
    db.get_posts().then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  postPost: (req, res) => {
    const db = req.app.get('db')
    const {author_id, title, img, content} = req.body
    db.post_post([author_id, title, img, content]).then(results => {
      res.status(201).send(results)
    }).catch(err => res.status(500).send(err))
  },
  putPost: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {title, img, content} = req.body
    db.put_post([id, title, img, content]).then(results => {
      res.status(202).send(results)
    }).catch(err => res.status(500).send(err))
  },
  deletePost: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_post(id).then(results => {
      res.status(202).send(results)
    }).catch(err => res.status(500).send(err))
  }
}