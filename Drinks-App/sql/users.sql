-- insert into users
-- INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday)
-- VALUES (uuid_generate_v4(), 'John', 'Doe', 'johnnyboy', 'john@gmail.com', 'password', 'some stuff about john', '1989-11-12');


INSERT INTO users (user_id, first_name, last_name, username, email, password, bio, birthday)
VALUES (uuid_generate_v4(), 'John', 'Doe', 'johnnyboy', 'john@gmail.com', 'password', null, null);
SELECT * FROM users