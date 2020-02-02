SELECT p.id, 
p.author_id, 
u.username AS author_name, 
u.img AS author_img,
p.title,
p.img,
p.content
FROM posts p
JOIN users u ON (p.author_id = u.id)
WHERE p.id = $1;