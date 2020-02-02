INSERT INTO posts (author_id, title, img, content)
VALUES ($1, $2, $3, $4);
SELECT p.id, 
p.author_id, 
u.username AS author_name, 
u.img AS author_img,
p.title,
p.img,
p.content
FROM posts p
JOIN users u ON (p.author_id = u.id)
ORDER BY id DESC;