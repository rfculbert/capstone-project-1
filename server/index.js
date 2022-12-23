// class Node {
//     constructor(value){
//         this.val = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(head = null){
//         this.head = head
//     }
// }
const {search} = require('./controller')

const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
app.post('/api/search', search)
app.listen(4000, () => {
    console.log('listening on 4000')
})