require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

// middleware
app.use(cors())
app.use(express.json())

// routers
const mailRouter = require('./routers/mail')
app.use(mailRouter)

// server start
app.listen(port, () => console.log(`server started on port ${port}`))
