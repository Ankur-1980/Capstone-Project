-- create extension if not exists "uuid-ossp";

-- CREATE TABLE users (
-- user_id uuid,
-- 	first_name VARCHAR(50),
-- 	last_name VARCHAR(50),
-- 	username VARCHAR(20),
-- 	email VARCHAR(50),
-- 	password VARCHAR(20),
-- 	bio VARCHAR(255),
-- 	birthday DATE,
-- 	join_date DATE
-- );

-- INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday, join_date) 
-- VALUES (uuid_generate_v4(), 'Someone', 'Unknown', 'whoAmI', 'noone@gmial.com', 'PASSWORD', 'Nothing to see here', '02/04/1995', null);
-- SELECT * FROM users;

-- SELECT * FROM users;
-- SELECT * FROM users WHERE username='janna'
-- SELECT * FROM users WHERE email ='user@mail.com';

-- INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday, join_date) 
-- VALUES (uuid_generate_v4(), 'Someone', 'Unknown', 'whoAmI', 'noone@gmial.com', 'PASSWORD', 'Nothing to see here', '02/04/1995', null)
-- RETURNING user_id, password;
-- SELECT * FROM users;
-- SELECT * FROM users WHERE user_id = '422b8575-1e6b-4f4d-8f8a-faa3adf7b754';

