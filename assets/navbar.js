// components/navbar/navbar.js

/**
 * This script updates the cart item count live using the Shopify Cart API.
 * Docs: https://shopify.dev/docs/api/ajax/reference/cart
 */

document.addEventListener('DOMContentLoaded', function () {
  const cartCountElement = document.getElementById('CartCount');

  if (cartCountElement) {
    fetch('/cart.js')
      .then((response) => response.json())
      .then((cart) => {
        cartCountElement.textContent = cart.item_count;
      })
      .catch((err) => console.error('Error fetching cart count:', err));
  }
});
