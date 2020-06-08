CREATE TABLE users (
    user_id UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(25),
	username VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	date_of_birth DATE,
    enabled boolean DEFAULT true,
    last_login timestamp without time zone DEFAULT now()
);