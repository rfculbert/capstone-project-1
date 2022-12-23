//api needs to call from here
//axios calls instead of fetch
const destBttn = document.querySelector("#destBttn")
const seaBar = document.querySelector(".search")
let baseURL = "https://api.content.tripadvisor.com/api/v1"
function search (event){
axios.get('http://localhost:4000/api/search/')

console.dir(seaBar)
}
destBttn.addEventListener('click', search)