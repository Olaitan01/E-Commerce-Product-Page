/*const deductBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".add-btn");
const quantity = document.querySelector(".quantity");
const addToCartBtn = document.querySelector(".addToCart-btn");
const checkoutBtn = document.querySelector(".checkout");
let itemTitle = document.querySelector(".item-title");
let itemImage = document.querySelector(".cart-image");
let itemPrice = document.querySelector(".item-price");
let itemQuantity = document.querySelector(".itemQuantity");
let cartBtn = document.querySelector(".cartBtn");
let cartItem = document.querySelector(".cart-item");
let emptyCart = document.querySelector(".empty-cart");
const carts = document.querySelector(".carts");

cartBtn.addEventListener("click", () => {
  if (cartItem.classList.toggle(".active")) {
    cartItem.style.display = "block";
  } else {
    cartItem.style.display = "none";
  }
});


let quantityEl = parseInt(quantity.innerText);
let num = 0;

deductBtn.addEventListener("click", reduceQuantity);
function reduceQuantity() {
  num -= 1;
  quantity.innerText =  num;
  
}
addBtn.addEventListener("click", increaseQuantity);

function increaseQuantity() {
  num += 1;
  quantity.innerText = num;
  
}



addToCartBtn.addEventListener("click", cartAdded);

function cartAdded() {
  emptyCart.innerText = "";
  let cartNum = document.querySelector(".cart-num");
  num += 1;
  cartNum.innerText = num;
  let title = document.querySelector(".title").innerText;
  let price = document.querySelector(".price").innerText;
  let priceEl = parseFloat(price.replace("$", ""));
  let quantity = document.querySelector(".quantity").innerText;
  let quantityEl = parseInt(quantity);
  let imgSrc = document.querySelector(".shoe-thumbnail").src;
  cartLists(imgSrc, priceEl, quantityEl, title);
  updateTotal();
}

function cartLists(imgSrc, priceEl, quantityEl, title) {
  let cartrow = document.createElement("div");
  cartrow.classList.add(".cart-row");
  
  cartrow.innerHTML = ` <div class="cart-row">
  
    <span class="item-image"
      ><img
        src="${imgSrc}"
        alt="shoe image"
        class="cart-image"
    /></span>
    <div class="item-info">
      <span class="item-title">${title}</span>
      <span class="price-calc">
        <span class="item-price">$${priceEl}</span>
        <span class="multiplication">*</span>
        <span class="itemQuantity">${quantityEl}</span>
      </span>
      <span class="total">0</span>
    </div>
   
    <button class="remove">
      <img
        src="images/icon-delete.svg"
        alt="delete icon"
        class="remove-icon"
      />
    </button>
  </div>
  <button class="checkout">Checkout</button>
</div>`;
  carts.append(cartrow);

  
  cartrow.querySelector(".remove").addEventListener("click",removeItem);
  
}



function updateTotal() {
  let itemPrice = document.querySelector(".item-price").innerText;
  let price = parseFloat(itemPrice.replace("$", ""));
  let itemQuantity = document.querySelector(".itemQuantity").innerText;
  let quantity = parseInt(itemQuantity);
  let totalEl = price * quantity;
  let total = document.querySelector(".total");
  total.innerText = `$${totalEl}`;
}


function removeItem() {
  let cartRow=document.getElementsByClassName("cart-row")[0]
    cartRow.remove()

  
  emptyCart.innerText = "YOUR CART IS EMPTY";
  let cartNum = document.querySelector(".cart-num");
  num -= 1;
  cartNum.innerText = num;
}*/

/**Quantity Arithmetic */
const quantity = document.querySelector(".quantity");
let num = 0;
const incrementBtn = document.querySelector(".add-btn");
incrementBtn.addEventListener("click", increment);
function increment() {
  num += 1;
  quantity.innerText = num;
  quantityUpdate()
}

const decrementBtn = document.querySelector(".deduct-btn");
decrementBtn.addEventListener("click", decrement);
function decrement() {
  num -= 1;
  quantity.innerText = num;
  quantityUpdate()
  
}

/**Show cart item when the cart icon is clicked */
let cartBtn=document.querySelector(".cartBtn")
let cartItemEl=document.querySelector(".cart-item")
cartBtn.addEventListener("click",()=>{
  if(cartItemEl.classList.toggle("active")){
    cartItemEl.style.display="block"
  }else{
    cartItemEl.style.display="none"
  }
})



/**Add to cart */
const addToCartBtn = document.querySelector(".addToCart-btn");
addToCartBtn.addEventListener("click", addToCart);
function addToCart() {
  let price = document.querySelector(".price").innerText;
  let quantity = document.querySelector(".quantity").innerText;
  let title = document.querySelector(".title").innerText;
  let imgSrc = document.querySelector("#sneaker-thumbnail").src;
 
  itemAddedToCart(price, quantity, title, imgSrc);
  updateTotal();
}

function itemAddedToCart(price, quantity, title, imgSrc) {
  let cart = document.querySelector(".cart-item");
  const cartRow = document.createElement("div");
  cartRow.classList.add(".cart-row")
  
  let cartItemQuantityIndication=document.querySelector(".cart-num")
  let num=0
  num+=1
  cartItemQuantityIndication.innerText=num
  let cartEmpty=document.querySelector(".empty-cart")
  cartEmpty.innerText=" "

  cartRow.innerHTML = ` <div class="cartRow">
  <div class="cart-row">
  
<span class="item-image"
  ><img
    src="${imgSrc}"
    alt="sneaker image"
    class="cart-image"
/></span>
<div class="item-info">
  <span class="item-title">${title} </span>
  <span class="price-calc">
    <span class="item-price">${price}</span>
    <span class="multiplication">*</span>
    <span class="itemQuantity">${quantity}</span>
  </span>
  <span class="total">0</span>
</div>

<button class="remove">
  <img
    src="images/icon-delete.svg"
    alt="delete icon"
    class="remove-icon"
  />
</button>

</div>
<button class="checkout">Checkout</button>
</div>
`;

  
  cart.append(cartRow);
  cart.querySelector(".remove").addEventListener("click", remove);
 
}

/**cart number increment */
function cartQuantityIndicator() {
  const cartIndicator = document.querySelector(".cart-num");
  num += 1;
  cartIndicator.innerText = num;
}

/**Update total when the add to cart function is clicked */

function updateTotal() {
  let itemPrice = parseFloat(
    document.querySelector(".item-price").innerText.replace("$", "")
  );
  let itemQuantity = parseInt(
    document.querySelector(".itemQuantity").innerText
  );
  const total = document.querySelector(".total");
  let totaEl = itemPrice * itemQuantity;
  total.innerText = `$${totaEl}`;
}

/**Quantity update */
function quantityUpdate(){
  if(isNaN(quantity.innerText)||quantity.innerText<=0){
    quantity.innerText=1
    return
  }
}


/**remove item */
function remove() {
  let cartRow = document.querySelector(".cartRow").remove();
  let cartEmpty=document.querySelector(".empty-cart")
  cartEmpty.innerText="Your cart is empty"
  let cartItemQuantityIndication=document.querySelector(".cart-num")
  
  num-=1
  cartItemQuantityIndication.innerText=num
}
