
let baseURL = "https://api.content.tripadvisor.com/api/v1"
const backBtn = document.querySelector("#backBtn")

let params = new URLSearchParams(window.location.search)  
let sQuery = (params.get("detailQuery"))

let locations = document.querySelector("#location")
locations.innerText = sQuery[0].toUpperCase() + sQuery.substring(1).toLowerCase()

axios.post('http://localhost:4000/api/search/', {sQuery}).then(locationsResponse => {
    console.log(locationsResponse.data)
    for (let i = 0; i <= 2; i++){
        axios.get(`http://localhost:4000/api/reviews/${locationsResponse.data[i].location_id}`).then(reviewResponse => {
            var revText = reviewResponse.data[i].text
            let revOne = document.querySelector(`#rev${i}`)
            revOne.innerText = `${locationsResponse.data[i].name}:\n\n${revText}`
    console.log(reviewResponse)
})
        console.log(locationsResponse)
        axios.get(`http://localhost:4000/api/photos/${locationsResponse.data[i].location_id}`).then(photoResponse => {
            var bckGrdImg = photoResponse.data[1].images.large.url
            var url = photoResponse.data[0].images.large.url
            let imgOne = document.querySelector(`.apiImg${i}`)
            if (i === 0){locations.style.backgroundImage = `url(${bckGrdImg})`}
            imgOne.setAttribute("src", url)
            console.log(photoResponse.data)
        })
        
    }
})

function goBack(event){
    window.location.href='/client/home.html'
}

backBtn.addEventListener('click', goBack)

