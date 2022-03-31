
DROP TABLE IF EXISTS users;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
photoid INTEGER NOT NULL,
);

INSERT INTO users(name, photoid) VALUES ('bubbles', 1);
INSERT INTO users(name, photoid) VALUES ('julian', 2);
INSERT INTO users(name, photoid) VALUES ('rickys', 3);
INSERT INTO users(name, photoid) VALUES ('conky', 4);