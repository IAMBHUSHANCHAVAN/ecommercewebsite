document.addEventListener('DOMContentLoaded',function(){
async function fetchproduct(url){
let data = await fetch(url);
let respnse = await data.json()
// console.log(respnse)
let str = ""
for(let i in respnse){
    str = str + `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="${respnse[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${respnse[i].title}</h5>
      <p class="card-text">${respnse[i].description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${respnse[i].price}</li>
      <li class="list-group-item">${respnse[i].category}</li>
      <li class="list-group-item d-flex">
      <i class="fa-solid fa-star"></i>
      <span id="rateit">&nbsp${respnse[i].rating.rate}&nbsprating</span><span id="countit">Total (${respnse[i].rating.count}) votes</span>
      </li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">buy</a>
      <a href="getch.html" class="btn btna card-link">add to cart</a>
    </div>
    </div>
  </div>`
    }
    document.querySelector(".content").innerHTML=str
    let hh = document.querySelector(".btn2")
hh.addEventListener('click',()=>{
  fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>console.log(json))
      document.getElementsByClassName(".content").innerHTML=str
})
}
fetchproduct("https://fakestoreapi.com/products?limit=8")



})

