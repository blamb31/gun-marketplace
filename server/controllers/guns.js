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
    }
}