
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = ""; 

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Sepetinizde ürün bulunmamaktadır</p>";
  } else {
    cart.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
 
      cartItemsContainer.appendChild(cartItemDiv);
    });
  }

  updateCartTotal();
}

function updateCartTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  document.getElementById("totalPrice").innerText = total;
}

 
function pay() {
  if (cart.length === 0) {
    alert("Sepetinizde ödeme yapılacak ürün bulunmamaktadır");
    return;
  }
  
  alert("Ödeme Başarıyla Yapıldı!");
  localStorage.removeItem("cart"); 
  window.location.replace("../index.html");  
}

displayCartItems(); 
