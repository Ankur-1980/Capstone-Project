-- CREATE TABLE user_recipes (
-- user_id UUID,
-- 	drink_name VARCHAR(50),
-- 	rating DECIMAL(2,1),
-- 	glassware VARCHAR(30),
-- 	latitude DECIMAL(6,3),
-- 	longitude DECIMAL(6,3),
-- 	drink_method VARCHAR(255),
-- 	ingredient_1 VARCHAR(25),
-- 	ingredient_2 VARCHAR(25),
-- 	ingredient_3 VARCHAR(25),
-- 	ingredient_4 VARCHAR(25),
-- 	ingredient_5 VARCHAR(25),
-- 	amount_1 VARCHAR(25),
-- 	amount_2 VARCHAR(25),
-- 	amount_3 VARCHAR(25),
-- 	amount_4 VARCHAR(25),
-- 	amount_5 VARCHAR(25),
-- 	date_created date
-- )

-- INSERT INTO user_recipes ( user_id,	drink_name,	rating,	glassware,latitude,	longitude,drink_method,	ingredient_1,ingredient_2,ingredient_3,ingredient_4,ingredient_5,amount_1,amount_2,amount_3,amount_4,amount_5, date_created)
-- VALUES (uuid_generate_v4(), 'Something Delicious', '3.5','Collins','42.190','-83.253','Shake and strain','vodka','Aperol','Lemon Juice','St. Germain', null, '1.5oz','.75oz','.5oz','.5oz',null, null)
	select * FROM user_recipes
	