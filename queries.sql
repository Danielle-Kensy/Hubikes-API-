CREATE TABLE bike (
    id VARCHAR(60) UNIQUE NOT NULL,
    color VARCHAR(60),
    marches int NOT NULL,
    brand VARCHAR(60) NOT NULL,
    model VARCHAR(60) NOT NULL,
    price FLOAT NOT NULL
)