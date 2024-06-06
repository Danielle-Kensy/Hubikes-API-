CREATE TABLE bike (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    color VARCHAR(60),
    marches int NOT NULL,
    brand VARCHAR(60) NOT NULL,
    model VARCHAR(60) NOT NULL,
    price FLOAT NOT NULL
)

CREATE TABLE category (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL
)

INSERT INTO category (id, name) VALUES ('1', 'Road Bikes');
INSERT INTO category (id, name) VALUES ('2', 'Mountain Bikes');
INSERT INTO category (id, name) VALUES ('3', 'Hybrid Bikes');
INSERT INTO category (id, name) VALUES ('4', 'Electric Bikes');

CREATE TABLE bike_category (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    category_id VARCHAR(60) NOT NULL,
    bike_id VARCHAR(60) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (bike_id) REFERENCES bike(id)
)

CREATE TABLE users (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    phone VARCHAR(60) NOT NULL,
    document VARCHAR(60) NOT NULL
)

CREATE TABLE address (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    user_id VARCHAR(60) NOT NULL,
    street VARCHAR(60) NOT NULL,
    number INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
