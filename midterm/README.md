# Web Technologies Lab Midterm (CSC336)

**Name:** Fateh Ali

**Roll No / Reg No:** FA24-BCS-032

## My personal numbers

- N = 32
- BP = 632px
- H = 224 (accent colour `hsl(224, 70%, 45%)`)
- K = 5
- Cart limit per product = (32 mod 4) + 2 = 2
- Delivery date range: 2026-10-29 to 2026-11-30 (exam date + 32 days)

## Files changed

- `index.html`: added the "Shop by Category" menu (desktop panel and mobile accordion), replaced the cart icon with a badge and mini cart, linked `script.js`
- `style.css`: added the mega-menu, checkout form and mini-cart styles
- `checkout.html` (new): checkout form with HTML5 validation
- `script.js` (new): cart logic
- `product.html`: cart icon now links to `checkout.html`

## Task 1: Mega-menu

I added a "Shop by Category" button to the navbar. From 632px and wider, hovering it or tabbing to it opens a full-width panel with 5 columns (Tops, Bottoms, Suits, New In, Quick Links), each with a heading and 4 links. It uses `:hover` and `:focus-within`, so it stays open while the pointer moves into the panel and closes when focus leaves. The panel is `position: absolute` under the sticky navbar with a high `z-index`, so it covers the product grid and does not push the page down. Below 632px the button is hidden and the same 5 groups appear as `<details>`/`<summary>` accordions inside the hamburger menu, all closed by default.

## Task 2: Checkout form

I created `checkout.html` from `product.html` so it keeps the same navbar and footer, and linked it from the cart icon. It has two fieldsets ("Contact" and "Delivery"), and every input has a label joined with `for`/`id`. Validation uses only HTML5: `required`, `type="email"`, a `pattern="03[0-9]{2}-[0-9]{7}"` on the phone, and `min`/`max` on the date. Invalid fields get a red border and message with `:user-invalid`, so nothing shows on page load. From 632px the fieldsets sit side by side with labels in a left column (CSS Grid), below that it is one column, and the submit button is full width at every size.

## Task 3: Cart badge and mini cart

I added `script.js` in plain JavaScript. Clicking "Add to cart" reads the name and price from the card and pushes an object into a `cart` array, and the badge on the cart icon shows `cart.length`. Clicking the cart icon toggles a mini-cart panel that lists each item with a Remove button, and the total is calculated with `reduce()`. Each product can be added at most 2 times (counted by its image path, since several cards share the name "Men Suit"), after which its button shows "Limit reached" and is disabled until one is removed.

## AI tools used

Claude (Anthropic) for guidance on the code changes.

---
