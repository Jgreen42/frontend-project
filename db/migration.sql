@@ -1,12 +1,12 @@
DROP TABLE if exists users;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
photoid INTEGER NOT NULL
);

INSERT INTO users(name, photoid) VALUES ('', 1);	
INSERT INTO users(name, photoid) VALUES ('', 2);	
INSERT INTO users(name, photoid) VALUES ('', 3);	
INSERT INTO users(name, photoid) VALUES ('', 4); 	
