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
      <p class="card-text">${respnse[i].description.slice(0,40)}...</p>
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
}
fetchproduct("https://fakestoreapi.com/products?limit=8")
// working search bar
searchhere.addEventListener("click",(e)=>{
  e.preventDefault()
  let query = inputsrc.value
  fetchproduct(`https://fakestoreapi.com/products/category/${query}`)
})

// search on button

menware.addEventListener("click",(e)=>{
  e.preventDefault()
  let y = menware.innerHTML
  fetchproduct(`https://fakestoreapi.com/products/category/${y}`)
})
womenware.addEventListener("click",(e)=>{
  e.preventDefault()
  let y = womenware.innerHTML
  fetchproduct(`https://fakestoreapi.com/products/category/${y}`)
})
jewl.addEventListener("click",(e)=>{
  e.preventDefault()
  let y = jewl.innerHTML
  fetchproduct(`https://fakestoreapi.com/products/category/${y}`)
})
elect.addEventListener("click",(e)=>{
  e.preventDefault()
  let y = elect.innerHTML
  fetchproduct(`https://fakestoreapi.com/products/category/${y}`)
})
viewall.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById("displaynot").style.display = "block";
  document.querySelector(".content").innerHTML=``
})
morecart.addEventListener("Click",(e)=>{
  e.preventDefault()
  fetchproduct("https://fakestoreapi.com/products?limit=10")
})

})

