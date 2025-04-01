var sidenav = document.querySelector(".side-nav")
function showbar(){
    sidenav.style.left=0
}
function closebar(){
    sidenav.style.left="-60%"
}
var productContainer=document.getElementById("products")
var search = document.getElementById("search")
var productlist= productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enterdedvalue=event.target.value.toUpperCase()
    for (count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enterdedvalue)<0){
            productlist[count].style.display="none"
        }  
        else{
            productlist[count].style.display="block"
        }
      }
})