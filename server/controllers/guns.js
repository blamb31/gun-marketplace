module.exports= {
    getGuns: async( req, res ) => {
        try{
            const user = req.session.user

            if(!user){
                res.status(401).send('No User is logged in!')
            }

            const db = req.app.get('db')
            const guns = await db.get_guns()

            res.status(200).send(guns)
        }catch(err){
            res.status(400).send("There was an error in the getGuns block (gunsCtrl)", err)
        }
    },
    getGun: async (req, res) =>  {
        try{
            const user = req.session.user
            const {gun_id} = req.params
            const db = req.app.get('db')
    
            if(!user){
                return res.send('No user is logged in!')
            }
            const gunlist = await db.get_gun(gun_id)
            delete gunlist[0].password
            console.log(232323, gunlist[0])
            res.status(200).send(gunlist[0])
        }catch(err){
            console.log("Error in the getGun block (gunCtrl)", err)
            res.status(404).send(err)
        }
    },
    addGun: async (req, res) =>{
        try {
            const user = req.session.user
            if(!user) {
                return res.status(401).send("No User Logged In!")
            }

            console.log(232323, req.body)

            const {
                type,
                description,
                price, 
                location_lat,
                location_long,
                city, 
                state,
                brand,
                model
            } = req.body

            const {id:owner} = req.session.user
            const db = req.app.get('db')
            const gunList = await db.add_gun({
                owner,
                type,
                description,
                price, 
                location_lat,
                location_long,
                city, 
                state,
                brand,
                model
            })
            res.status(200).send(gunList)
        }catch(err){
            console.log("There is an error in the addGun Block (gunsCtrl)", err)
            res.status(409).send(err)
        }
    },
    deleteGun: async (req, res) => {
        try{
            const {user} = req.session
            const {gun_id:id} = req.params
    
            if(!user) {
                return res.status(401).send("No User Logged In!")
            }

            const db = req.app.get('db')
            const gunList = await db.delete_gun(id)

            res.status(200).send(gunList)

        }catch(err){
            console.log("There is an error in thedeleteGun Block (gunsCtrl)", err)
            res.status(409).send(err)
        }
    },
    editGun: async (req, res) => {
        try{
            const {user} = req.session
            if(!user) {
                return res.status(401).send("No User Logged In!")
            }

            const {gun_id:id} = req.params
            const {
                type,
                description,
                price,
                location_lat,
                location_long,
                city,
                state,
                brand,
                model
            } = req.body

            const db = req.app.get('db')
            const updatedGun = await db.edit_gun({
                id,
                type,
                description,
                price,
                location_lat,
                location_long,
                city,
                state,
                brand,
                model
            })
            delete updatedGun[0].password && delete updatedGun[0].email
            res.status(200).send(updatedGun[0])
        }catch(err){
            console.log("There is an error in the editGun Block (gunsCtrl)", err)
            res.status(409).send(err)
        }
    }
}