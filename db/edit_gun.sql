UPDATE guns
SET type = ${type},description = ${description}, price = ${price}, location_lat = ${location_lat}, location_long = ${location_long}, city = ${city}, state = ${state}, brand = ${brand}, model = ${model}
WHERE id = ${id};

SELECT * FROM guns g
JOIN gun_owners go ON g.owner = go.id
WHERE g.id = ${id}