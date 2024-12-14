     
let cart = JSON.parse(localStorage.getItem("cart")) || [];

     
function addToCart(productName, price) {
  const product = { name: productName, price: price };
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  
  updateCartTotal();   
  updateCartItemCount();     
}


function updateCartTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  document.getElementById("totalPrice").innerText = total;
}

function updateCartItemCount() {
  const cartTotalItems = document.getElementById("cart-total-items");
  cartTotalItems.innerText = cart.length;   
}


function goToCart() {
  window.location.href = "/pages/cart.html";
}


updateCartTotal();
updateCartItemCount();
