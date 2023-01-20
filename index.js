const express = require('express')
const cors = require('cors')
const { connectDatabase } = require('./config/bd')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 5001
// middleWares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})
connectDatabase()


app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})