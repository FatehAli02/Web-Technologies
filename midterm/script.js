const LIMIT = 2; // (N mod 4) + 2
let cart = [];

const badge = document.getElementById("cart-badge");
const panel = document.getElementById("mini-cart");
const list = document.getElementById("cart-items");
const totalEl = document.getElementById("cart-total");
const cartBtn = document.getElementById("cart-btn");
const addButtons = document.querySelectorAll(".card .btn");

function cardId(card) {
  return card.querySelector("img").getAttribute("src");
}

function countOf(id) {
  return cart.filter((item) => item.id === id).length;
}

function render() {
  badge.textContent = cart.length;

  list.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className =
      "d-flex justify-content-between align-items-center mb-2 small";
    li.innerHTML =
      "<span>" +
      item.name +
      "<br>PKR " +
      item.price.toLocaleString() +
      "</span>" +
      '<button type="button" class="btn btn-sm btn-outline-danger rounded-0 remove-btn" data-index="' +
      index +
      '">Remove</button>';
    list.appendChild(li);
  });

  totalEl.textContent = cart
    .reduce((sum, item) => sum + item.price, 0)
    .toLocaleString();

  addButtons.forEach((btn) => {
    const reached = countOf(cardId(btn.closest(".card"))) >= LIMIT;
    btn.disabled = reached;
    btn.textContent = reached ? "Limit reached" : "Add to cart";
  });
}

addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const id = cardId(card);
    if (countOf(id) >= LIMIT) return;
    cart.push({
      id: id,
      name: card.querySelector(".card-title").textContent.trim(),
      price: parseInt(
        card.querySelector(".card-text").textContent.replace(/\D/g, ""),
        10,
      ),
    });
    render();
  });
});

list.addEventListener("click", (e) => {
  if (e.target.matches(".remove-btn")) {
    cart.splice(Number(e.target.dataset.index), 1);
    render();
  }
});

cartBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stay on the page; toggle the panel instead
  panel.hidden = !panel.hidden;
});

render();
