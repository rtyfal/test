const express = require('express')
const bodyParser = require("body-parser")
const mainRouter = require("./routes/main")
const userRouter = require("./routes/user")
var cors = require('cors')

const app = express()
const port = 3000
app.use(cors())

app.use(bodyParser.json())

app.use("/hello",mainRouter )
app.use("/users",userRouter)

// app.use((req,res,next,error)=>{
//     console.log(123)
//     const message = error.message || "Server error";
//     const status = error.status || 500
//     console.log(status, message)
//     return res.status(status).json({message})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
