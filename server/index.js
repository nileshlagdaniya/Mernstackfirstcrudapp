require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./Routes/Router')
const employees = require('./Models/EmployeeSchema')
require('./DATABASE/Conn')
const port = 7602;

app.use(cors())
app.use(express.json())
app.use('/uploads/', express.static('./uploads'))
app.use(router)

app.get('/', (req, res) => {
    res.status(201).json('server start')
})

app.listen(port, () => console.log('listening on port 7602'))