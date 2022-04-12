DROP TABLE if exists users;
DROP TABLE if exists img;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
email TEXT NOT NULL
);
CREATE TABLE img (
    imgID PRIMARY KEY,
    locURL VARCHAR(255),
    userID FOREIGN KEY,
);
