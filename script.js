document.addEventListener('DOMContentLoaded',function(){
  var indices;
async function fetchproduct(url){
let data = await fetch(url);
let respnse = await data.json()
let str = ""
 indices = respnse.map(element => {
  
  // console.log(respnse.indexOf(element))
  // console.log(element);
  let storeindex = respnse.indexOf(element)
  console.log(storeindex);
  str = str + `
  <div class="col">
  <div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description.slice(0,40)}...</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.price}</li>
    <li class="list-group-item">${element.category}</li>
    <li class="list-group-item d-flex">
    <i class="fa-solid fa-star"></i>
    <span id="rateit">&nbsp${element.rating.rate}&nbsprating</span><span id="countit">Total (${element.rating.count}) votes</span>
    </li>
  </ul>
  <div class="card-body">
  <a href="/getch.html" class="card-link">description</a>
  <button class="btn" >add to cart</button>
  </div>
  </div>
</div>`
})   

  document.querySelector(".content").innerHTML= str
}
fetchproduct("https://fakestoreapi.com/products?limit=8")

// working search bar

searchhere.addEventListener("click",(e)=>{
  e.preventDefault()
  let query = inputsrc.value.toLowerCase()
  console.log(query);
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
  fetchproduct("https://fakestoreapi.com/products?limit=8")
})

let doc = document.getElementById("morecart")
doc.addEventListener("click",()=>{
  if(doc.innerHTML=="showless"){
    fetchproduct("https://fakestoreapi.com/products?limit=8")
    doc.innerHTML="more"
  }
  else if(doc.innerHTML="more"){
    fetchproduct(`https://fakestoreapi.com/products`)
    doc.innerHTML="showless"
  }
  else{
    console.log("error");
  }
 })

 // cart js

})
