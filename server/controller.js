let axios = require("axios")
let dotenv = require("dotenv")
dotenv.config()
let baseURL = "https://api.content.tripadvisor.com/api/v1"

module.exports = {
    search: (req, res) => {
        axios.get(`${baseURL}/location/search?key=${process.env.apiKey}&searchQuery=${req.body.sQuery}`)
        .then((locations) => {
            console.log(locations.data.data)
            res.status(200).send(locations.data.data)
        }).catch(error => console.log(error))
    },

    photo: (req, res) => {
        axios.get(`${baseURL}/location/${req.params.locationId}/photos?key=${process.env.apiKey}&language=en`)
        .then((photos) => {
            console.log(photos)
            res.status(200).send(photos.data.data)
            
        }).catch(error => console.log(error))
    },

    review: (req,res) => {
        axios.get(`${baseURL}/location/${req.params.locationId}/reviews?key=${process.env.apiKey}&language=en`)
        .then((review) => {
            console.log(review)
            res.status(200).send(review.data.data)
        }).catch(error => res.status(404).send("Be the first to review!"))
    },
}