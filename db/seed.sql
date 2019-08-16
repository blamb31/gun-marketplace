CREATE TABLE gun_owners(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    location_lat DECIMAL,
    location_long DECIMAL,
    city VARCHAR,
    state VARCHAR,
    password VARCHAR,
    email VARCHAR
);

CREATE TABLE guns (
    id SERIAL PRIMARY KEY,
    owner INTEGER REFERENCES gun_owners(id) ON DELETE CASCADE,
    type VARCHAR,
    description TEXT,
    price DECIMAL, 
    location_lat DECIMAL,
    location_long DECIMAL,
    city VARCHAR,
    state VARCHAR,
    brand VARCHAR,
    model VARCHAR
);

CREATE TABLE favorite_guns (
    gun_id INTEGER REFERENCES guns(id) ON DELETE CASCADE, 
    owner_id INTEGER REFERENCES gun_owners(id) ON DELETE CASCADE
);