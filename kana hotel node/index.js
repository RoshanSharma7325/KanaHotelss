const express = require("express")
require("./src/config/db")
const router = require("./src/routes/userRoute");
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.use(router)
app.listen(8080,()=>{
    console.log("sarven run");
    
})
