function Total(){
  let count=parseInt("1");
  let price=parseInt(300) ;
//   document.getElementById("ttlprice").innerHTML=price
  document.getElementById("plusbtn").addEventListener("click",()=>{
    count ++
    console.log(count);
    document.getElementById("countpics").innerHTML= count
    document.getElementById("ttlprice").innerHTML= price
  })
  document.getElementById("minusbtn").addEventListener("click",()=>{
    if(count==0 || count<0){
        document.getElementById("countpics").innerHTML= 0
    }
    else{
    count --
    price = price * count
    console.log(count);
    console.log(price);
    document.getElementById("countpics").innerHTML= count
    document.getElementById("ttlprice").innerHTML= price
}
  })
}
Total()