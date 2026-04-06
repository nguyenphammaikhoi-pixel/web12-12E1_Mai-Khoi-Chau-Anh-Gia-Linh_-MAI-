
function toggleMenu() {
  const nav = document.getElementById('navList');
  nav.classList.toggle('open');
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('maispa_cart') || '[]');
  const total = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

function addToCart(id, name, price, emoji) {
  const cart = JSON.parse(localStorage.getItem('maispa_cart') || '[]');
  const existing = cart.find(function(item) { return item.id === id; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: id, name: name, price: price, emoji: emoji, qty: 1 });
  }
  localStorage.setItem('maispa_cart', JSON.stringify(cart));
  updateCartBadge();
  alert('Đã thêm "' + name + '" vào giỏ hàng!');
}

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
});
