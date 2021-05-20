const express = require('express')
const app = express()
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json())

// routers
const mailRouter = require('./routers/mail')

app.use(mailRouter)

// server start
app.listen(3001, () => console.log('server started'))
