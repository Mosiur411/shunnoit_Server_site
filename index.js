const express = require('express')
const cors = require('cors')
const { connectDatabase } = require('./config/bd')
const { minionsRoutes } = require('./routes/minions')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5001

// middleWares
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send("hello")
})



// database
const mongodb_uri = process.env.PROD_DB
connectDatabase(mongodb_uri)

/* router  */
app.use('/', minionsRoutes)




















app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})