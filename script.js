const deductBtn = document.querySelector(".minus");
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
/**Cart Button */
cartBtn.addEventListener("click", () => {
  if (cartItem.classList.toggle(".active")) {
    cartItem.style.display = "block";
  } else {
    cartItem.style.display = "none";
  }
});

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

/**update total when quantity is changed */

/**Update total */
function updateTotal() {
  let itemPrice = document.querySelector(".item-price").innerText;
  let price = parseFloat(itemPrice.replace("$", ""));
  let itemQuantity = document.querySelector(".itemQuantity").innerText;
  let quantity = parseInt(itemQuantity);
  let totalEl = price * quantity;
  let total = document.querySelector(".total");
  total.innerText = `$${totalEl}`;
}
/**Remove Item functionality */

function removeItem() {
  let cartRow=document.getElementsByClassName("cart-row")[0]
    cartRow.remove()

  
  emptyCart.innerText = "YOUR CART IS EMPTY";
  let cartNum = document.querySelector(".cart-num");
  num -= 1;
  cartNum.innerText = num;
}
