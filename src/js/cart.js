// State for Cart
export let cartCount = 3;
export let cartTotal = 1089.70;
export const EMOJIS = ['🎧','👟','🎮','👕','⌚','💻','🥤','🎵','📱'];
export const BG_CLASSES = ['pi1','pi2','pi3','pi4'];

// DOM References for Cart
const $cartCount = () => document.getElementById('c-cnt');
const $cartTotal = () => document.getElementById('cTotal');
const $cartList = () => document.getElementById('cList');
const $cartDrawer = () => document.getElementById('cDrawer');

// Import showToast
import { showToast } from './toast.js';

// Cart functions
export function toggleCart() {
  $cartDrawer().classList.toggle('on');
}

export function closeCart() {
  $cartDrawer().classList.remove('on');
}

export function addCart(name, price) {
  // Update state
  cartCount++;
  cartTotal += price;

  // Update badge & total
  $cartCount().textContent = cartCount;
  $cartTotal().textContent = 'R$ ' + cartTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Build new cart item
  const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  const bg = BG_CLASSES[Math.floor(Math.random() * BG_CLASSES.length)];
  const priceFormatted = price.toFixed(2).replace('.', ',');

  const el = document.createElement('div');
  el.className = 'cart-itm';
  el.innerHTML = `
    <div class="cart-itm-img ${bg}">${emoji}</div>
    <div style="flex:1">
      <div class="cart-itm-name">${name}</div>
      <div class="cart-itm-price">R$ ${priceFormatted}</div>
      <div class="cart-itm-qty">Qtd: 1</div>
    </div>
  `;
  $cartList().prepend(el);

  // Open cart & show toast
  $cartDrawer().classList.add('on');
  showToast('✓ ' + name + ' adicionado!');
}