document.addEventListener('DOMContentLoaded',function(){
async function fetchproduct(url){
let data = await fetch(url);
let respnse = await data.json()
console.log(respnse)
let str =""
for(let i in respnse){
    console.log(respnse[i].rating.rate);
    // console.log(respnse[i].description);
    // console.log(respnse[i].category.id);
    str = str + `<div class="card" style="width: 18rem;">
    <img src="${respnse[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${respnse[i].title}</h5>
      <p class="card-text">${respnse[i].description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${respnse[i].price}</li>
      <li class="list-group-item">${respnse[i].category}</li>
      <i class="fa-solid fa-star"></i>
      <span id="rateit">${respnse[i].rating.rate}</span><span id="countit">${respnse[i].rating.count}</span>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">buy</a>
      <a href="#" class="card-link">add to cart</a>
    </div>
  </div>`
    }
}
fetchproduct('https://fakestoreapi.com/products')
})

