var a = document.querySelector(".box")
var b = document.querySelector("button")

var flag = 0;
b.addEventListener("click",function(){
    if(flag==0){
        a.style.backgroundColor = "transparent"
        console.log("rohit")
        flag = 1
    }
    else{
        a.style.backgroundColor = "yellow"
        console.log("singh")
        flag = 0;
    }
   
})