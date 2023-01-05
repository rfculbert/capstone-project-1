
const {search, photo, review} = require('./controller')


const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/api/reviews/:locationId', review)
app.get('/api/photos/:locationId', photo)
app.post('/api/search', search)
app.listen(4000, () => {
    console.log('listening on 4000')
})
