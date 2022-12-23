let baseURL = "https://api.content.tripadvisor.com/api/v1"

module.exports = {
    search: (req, res) => {
        axios.get(`${baseURL}/location/search?key=${apiKey}&searchQuery=${req.body.sQuery}`)
        .then((locations) => {
            res.status(200).send(locations)
        }).catch(error => console.log(error))
    }
}