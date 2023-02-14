const deductBtn=document.querySelector(".minus")
const addBtn=document.querySelector(".addition")
const quantity=document.querySelector(".quantity")
const checkoutBtn= document.querySelector(".checkout")
let itemTitle=document.querySelector(".item-title")
let itemImage=document.querySelector(".item-image")
let itemPrice=document.querySelector(".item-price")
let itemQuantity=document.querySelector(".itemQuantity")
const carts=document.querySelector(".carts")
const removeBtn= document.querySelector(".remove")
let itemTotal=document.querySelector(".total")


/**Add Cart Arithmentic */
let quantityEl=parseInt(quantity.innerText)
let num=0

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


/**Remove Item functionality */
removeBtn.addEventListener("click",removeItem)

let emptyCart=document.querySelector(".empty-cart")
function removeItem(){
    carts.remove()
    emptyCart.innerText="YOUR CART IS EMPTY"
}


/** Add to cart functionality */



