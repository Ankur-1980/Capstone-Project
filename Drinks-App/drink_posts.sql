-- SELECT * FROM drink_posts;
-- ALTER TABLE users
-- ADD COLUMN is_active BOOLEAN;

-- ALTER TABLE drink_posts
-- ADD COLUMN user_id UUID;
-- SELECT * FROM users;

-- "6248830e-da3f-494d-87d5-33544a0dfd00" - John Doe
-- "a005ec8d-877c-4de7-8e4f-82edb517ffab" - Janna

-- ALTER TABLE drink_posts 
-- RENAME COLUMN post_name TO post_drink_name;

-- INSERT INTO drink_posts ( post_id, post_drink_name, picture, rating, glassware, description, post_location, post_date, post_modified, user_id)
-- VALUES (uuid_generate_v4(), 'Last Word', '', '3.5', 'coupe', 'super tasty', 'Selden Standard', '01-16-2020', null, '6248830e-da3f-494d-87d5-33544a0dfd00');
-- INSERT INTO drink_posts ( post_id, post_drink_name, picture, rating, glassware, description, post_location, post_date, post_modified, user_id)
-- VALUES (uuid_generate_v4(), 'Not Another Word', '', '5.5', 'coupe', 'Delicious', 'Selden Standard', '01-17-2020', null, '6248830e-da3f-494d-87d5-33544a0dfd00');
-- INSERT INTO drink_posts ( post_id, post_drink_name, picture, rating, glassware, description, post_location, post_date, post_modified, user_id)
-- VALUES (uuid_generate_v4(), 'El Matador', '', '5', 'King Cube', 'spicy', 'Kiesling', '01-16-2020', null, '6248830e-da3f-494d-87d5-33544a0dfd00');
-- INSERT INTO drink_posts ( post_id, post_drink_name, picture, rating, glassware, description, post_location, post_date, post_modified, user_id)
-- VALUES (uuid_generate_v4(), 'Grandmas Garden', '', '4', 'Rocks', 'refreshing', 'Grey Ghost', '01-20-2020', null, 'a005ec8d-877c-4de7-8e4f-82edb517ffab');
-- INSERT INTO drink_posts ( post_id, post_drink_name, picture, rating, glassware, description, post_location, post_date, post_modified, user_id)
-- VALUES (uuid_generate_v4(), 'FMR', '', '2.5', 'Up', 'smoky and bitter', 'Grey Ghost', '01-20-2020', null, 'a005ec8d-877c-4de7-8e4f-82edb517ffab');

SELECT * FROM drink_posts;

