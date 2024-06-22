CREATE TABLE bike (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    color VARCHAR(60),
    marches int NOT NULL,
    brand VARCHAR(60) NOT NULL,
    model VARCHAR(60) NOT NULL,
    img VARCHAR(60),
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

insert into bike_category (id, category_id, bike_id) values ('1', '1', '53dc62c6-1b26-4dcd-829c-5b4a5dbc11c3');
insert into bike_category (id, category_id, bike_id) values ('2', '2', '53dc62c6-1b26-4dcd-829c-5b4a5dbc11c3');
insert into bike_category (id, category_id, bike_id) values ('3', '3', 'd60ceeb5-7db2-4626-9da7-c682757de047');

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

CREATE TABLE orders (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    user_id VARCHAR(60) NOT NULL,
    created_at DATETIME NOT NULL,
    address_id VARCHAR(60) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (address_id) REFERENCES address(id)
)

CREATE TABLE order_product (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    order_id VARCHAR(60) NOT NULL,
    product VARCHAR(60) NOT NULL,
    quantity INTEGER NOT NULL,
    price INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product) REFERENCES bike(id)
)

CREATE TABLE payment (
    id VARCHAR(60) NOT NULL PRIMARY KEY,
    type VARCHAR(60) NOT NULL,
    state VARCHAR(60) NOT NULL,
    paymentDate DATETIME,
    dueDate DATETIME,
    installments INTEGER,
    totalAmount INTEGER,
    order_id VARCHAR(60) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
)