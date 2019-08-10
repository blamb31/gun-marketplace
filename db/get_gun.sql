SELECT * FROM guns g
JOIN gun_owners go ON g.owner = go.id
WHERE g.id = $1