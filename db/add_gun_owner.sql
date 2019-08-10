INSERT INTO gun_owners (first_name, last_name, location_lat, location_long, city, state, email, password)
VALUES ( ${first_name}, ${last_name} , ${location_lat} , ${location_long} , ${city} ,  ${state}, ${email}, ${password})

RETURNING *;