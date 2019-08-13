INSERT INTO guns (owner, type, description, price, location_lat, location_long, city, state, brand, model)
VALUES (${owner}, ${type}, ${description}, ${price}, ${location_lat}, ${location_long}, ${city}, ${state}, ${brand}, ${model});

SELECT * FROM guns