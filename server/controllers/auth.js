const bcrypt = require('bcryptjs')
module.exports = {
    register: async (req, res) => {
        try{
            let db = req.app.get('db')
            let {password, first_name, last_name, location_lat,location_long, email, city, state} = req.body
    

            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password, salt)
    
            let response = await db.add_gun_owner({
                email,
                password:hash,
                first_name,
                last_name,
                location_lat,
                location_long,
                city,
                state
            })

            let newUser = response[0]

            delete newUser.password
            req.session.user = newUser
    
            res.status(200).send(req.session.user)
        }
        catch(err){
            console.log('There was an error in the register block (authCtrl)', err)
            res.status(409).send(err)
        }
    },

    login: async (req, res) => {
        try {

            const currentUser = req.session.user

            if(currentUser) {
                res.status(401).send('user already logged in')
            }

            let db = req.app.get('db')

            const { email, password } = req.body
            
            const userExistsList = await db.get_gun_owner_by_email(email)
            const userExists = userExistsList[0]

            if(!userExists) {
                res.status(404).send("Username or Password is incorrect")
            }

            const isAuthenticated = bcrypt.compareSync(password, userExists.password)

            if(!isAuthenticated) {
                res.status(404).send("Username or Password is incorrect")
            }
            delete userExists.password

            req.session.user = userExists

            res.status(200).send(req.session.user)

        }catch(err) {
            console.log("There is an error in the login block (authCtrl)", err)
            res.status(409).send(err)
        }
    },

    logout: async (req, res) => {
        req.session.destroy()
        res.status(200).send("Logged Out")
    }
}