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
    }
}