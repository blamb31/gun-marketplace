const express = require('express')
const app = express()
const session = require('express-session')
require('dotenv').config()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const massive = require('massive')

const authCtrl = require('./controllers/auth')
const gunsCtrl = require('./controllers/guns')

app.use(express.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db',db) 
    console.log('The DB is connected!')
    app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`)
    })
})

app.use(express.static(`${__dirname}/../build`))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized:  false,
    cookie: {
        // secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.post('/auth/register', authCtrl.checkEmail, authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

app.get('/user/getUser', authCtrl.getUser)
app.post('/user/editUser')

app.get('/guns', gunsCtrl.getGuns)
app.get('/guns/:gun_id', gunsCtrl.getGun)
app.post('/guns', gunsCtrl.addGun)
app.delete('/guns/:gun_id', gunsCtrl.deleteGun)
app.post('/guns/favorite/:gun_id', gunsCtrl.addGunToFavorites)
app.post('/guns/removeFavorite/:gun_id', gunsCtrl.removeGunFromFavorites)
app.put('/guns/:gun_id', gunsCtrl.editGun)