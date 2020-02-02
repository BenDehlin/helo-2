DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users 
(id SERIAL PRIMARY KEY, 
username VARCHAR(120), 
hash VARCHAR(3200), 
img VARCHAR(3200));

CREATE TABLE posts
(id SERIAL PRIMARY KEY,
author_id INTEGER REFERENCES users(id),
title VARCHAR(120),
img VARCHAR(3200),
content VARCHAR(3200)
);

INSERT INTO users (username, hash, img)
VALUES ('Test1', 'awefhlkwajfe', 'This is an image');

INSERT INTO posts (author_id, title, img, content)
VALUES (1, 'First Title', 'post image', 'all the content');

SELECT * FROM users ORDER BY id;
SELECT * FROM posts ORDER BY id;

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