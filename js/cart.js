
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = ""; 
  cart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `<h3>${item.name}</h3><p> Fiyat ${item.price} ₺</p>`;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  updateCartTotal();
}


function updateCartTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  document.getElementById("totalPrice").innerText = total;
}





function goToPayment() {
  if (cart.length > 0) {
    window.location.href = "/pages/payment.html";
  } else {
    alert("Sepetiniz Boş");
  }
}




displayCartItems(); 