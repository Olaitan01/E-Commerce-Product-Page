const deductBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".add-btn");
const quantity = document.querySelector(".quantity");
const addToCartBtn = document.querySelector(".addToCart-btn");
const checkoutBtn = document.querySelector(".checkout");
let itemTitle = document.querySelector(".item-title");
let itemImage = document.querySelector(".cart-image");
let itemPrice = document.querySelector(".item-price");
let itemQuantity = document.querySelector(".itemQuantity");
const carts = document.querySelector(".carts");

let itemTotal = document.querySelector(".total");

/**Add Cart Arithmentic */
let quantityEl = parseInt(quantity.innerText);
let num = 0;

deductBtn.addEventListener("click", reduceQuantity);
function reduceQuantity() {
  num -= 1;
  quantity.innerText = quantityEl + num;
}
addBtn.addEventListener("click", increaseQuantity);

function increaseQuantity() {
  num += 1;
  quantity.innerText = quantityEl + num;
}

/** Add to cart functionality */

addToCartBtn.addEventListener("click", cartAdded);

function cartAdded() {
  let title = document.querySelector(".title").innerText;
  let price = document.querySelector(".price").innerText;
  let priceEl = parseFloat(price.replace("$", ""));
  let quantity = document.querySelector(".quantity").innerText;
  let quantityEl = parseInt(quantity);
  let imgSrc = document.querySelector(".shoe-thumbnail").src;
  console.log(imgSrc, priceEl, quantityEl, title);
  cartLists(imgSrc, priceEl, quantityEl, title);
  updateTotal();
  
}


function cartLists(imgSrc, priceEl, quantityEl, title) {
  let cartrow = document.createElement("div");

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
      <span class="total"></span>
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

  cartrow.querySelector(".remove").addEventListener("click", removeItem);
  quantity.addEventListener("change",updateQuantity)
}

/**update total when quantity is changed */
function updateQuantity() {
  if (isNaN(quantity.innerText) || quantity.innerText <= 0) {
    quantity.innerText= 1
    return
  }
  updateTotal()
}

/**Update total */
function updateTotal() {
  let itemPrice = document.querySelector(".item-price");
  let priceEl = parseFloat(itemPrice.innerText.replace("$", " "));

  let itemQuantity = document.querySelector(".itemQuantity");
  let quantity = parseInt(itemQuantity.innerText);
  console.log(typeof quantity);
  let totalEl = priceEl * quantity;
  const finalTotal = document.querySelector(".total");
  finalTotal.innerText = `$${totalEl}`
}

/**Remove Item functionality */

let emptyCart = document.querySelector(".empty-cart");
function removeItem() {
  carts.remove();
  emptyCart.innerText = "YOUR CART IS EMPTY";
}
