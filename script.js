const deductBtn=document.querySelector(".minus")
const addBtn=document.querySelector(".addition")
const quantity=document.querySelector(".quantity")
let quantityEl=parseInt(quantity.innerText)
let num=0
/**Add Cart Arithmentic */
deductBtn.addEventListener("click",reduceQuantity)
function reduceQuantity(){
    num-=1
    quantity.innerText= quantityEl + num
}
addBtn.addEventListener("click",increaseQuantity)

function increaseQuantity(){
    num+=1
    quantity.innerText=quantityEl + num
}




