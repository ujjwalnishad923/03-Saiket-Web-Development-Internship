// ================= CART =================

let cart = [];


// ADD PRODUCT TO CART

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCart();

    alert(productName + " added to cart!");
}


// UPDATE CART

function updateCart() {

    // Cart count update
    document.getElementById("cart-count").innerText = cart.length;


    // Cart container
    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        document.getElementById("total").innerText =
            "Total: ₹0";

        return;
    }


    // Total price
    let total = 0;


    // Show products
    cart.forEach(function(item, index) {

        total = total + item.price;


        const div = document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `
            <span>
                ${item.name} - ₹${item.price}
            </span>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;


        cartItems.appendChild(div);

    });


    // Display total

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}


// REMOVE PRODUCT

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// SHOP NOW BUTTON

function goToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}