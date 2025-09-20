exports.returnHelloWorld = (req,res,next) => {
    res.send( "Hello world1234456")
}

exports.returnUserId = (req,res,next) => {
    const params = req.params
    const id = params.id
    res.send(id)
}