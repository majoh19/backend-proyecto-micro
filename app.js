const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))

const proyecto = require('./routes/proyecto')
app.use('/api/proyectos', proyecto)

module.exports = app