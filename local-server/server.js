/* This code creates a node.js server using express.js, this will allow us to access files, specifically the model */
let express = require('express');
let app = express()

app.use(function(req, res, next){
    console.log(`${new Date()} - ${req.method} request for ${req.url}`)
    next()
})

app.use(express.static("../static"))

app.listen(85, function(){
    console.log("Serving static on 85")
})