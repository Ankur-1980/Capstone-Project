CREATE TABLE drink_posts (
post_id UUID NOT NULL,
	post_name VARCHAR(50),
	picture VARCHAR(50),
	rating DECIMAL(2,1),
	glassware VARCHAR(20),
	description VARCHAR(255),
	post_location VARCHAR,
	post_date TIMESTAMPTZ,
	post_modified TIMESTAMPTZ	
);

INSERT INTO drink_posts (post_id, post_name, picture, rating, glassware, description, post_location, post_date, post_modified)
VALUES (uuid_generate_v4(), 'look at this!', '', '3.5', 'Cocktail', 'This is sooo tasty', 'Mutiny Bar', NOW(), null);

SELECT * FROM drink_posts;

