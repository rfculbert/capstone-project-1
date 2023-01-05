const destBttn = document.querySelector("#destBttn")
const seaBar = document.querySelector(".search")
let baseURL = "https://api.content.tripadvisor.com/api/v1"
function search (event){
    let sQuery = seaBar.value
    window.location.href=`/client/details.html?detailQuery=${sQuery}`
console.dir(seaBar)
}
destBttn.addEventListener('click', search)
