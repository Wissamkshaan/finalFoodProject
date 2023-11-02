const mongoose = require('mongoose')
const { DATABASE_URL } = require('../config')

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6xvvg5e.mongodb.net/foodFinalProject?retryWrites=true&w=majority`
, { useNewUrlParser:true })
.then(() => {
    console.log('Successfully connected to MongoDB.')
})
.catch(e => {
    console.error('Connection error', e.message)
})

const db = mongoose.connection

module.exports = db


