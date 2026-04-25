/* OxyStore — Main JavaScript */

'use strict';

// State 
let cartCount = 3;
let cartTotal = 1089.70;
const EMOJIS = ['🎧','👟','🎮','👕','⌚','💻','🥤','🎵','📱'];
const BG_CLASSES = ['pi1','pi2','pi3','pi4'];

//  DOM References 
const $cartCount  = () => document.getElementById('c-cnt');
const $cartTotal  = () => document.getElementById('cTotal');
const $cartList   = () => document.getElementById('cList');
const $cartDrawer = () => document.getElementById('cDrawer');
const $sOverlay   = () => document.getElementById('sOverlay');
const $sInput     = () => document.getElementById('sInp');
const $toast      = () => document.getElementById('toast');

// Search 
function toggleSearch() {
  const overlay = $sOverlay();
  overlay.classList.toggle('on');
  if (overlay.classList.contains('on')) {
    setTimeout(() => $sInput().focus(), 50);
  }
}

function closeSearch() {
  $sOverlay().classList.remove('on');
}

//  Cart 
function toggleCart() {
  $cartDrawer().classList.toggle('on');
}

function closeCart() {
  $cartDrawer().classList.remove('on');
}

function addCart(name, price) {
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
  const bg    = BG_CLASSES[Math.floor(Math.random() * BG_CLASSES.length)];
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

//Toast 
function showToast(message) {
  const toast = $toast();
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}

//  Energy Tabs 
function initEnergyTabs() {
  const tabs = document.querySelectorAll('.etab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('on'));
      this.classList.add('on');
    });
  });
}

// Keyboard Shortcuts 
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCart();
    }
  });
}

// Newsletter 
function initNewsletter() {
  const btn = document.querySelector('.news-btn');
  const inp = document.querySelector('.news-input');
  if (!btn || !inp) return;

  btn.addEventListener('click', () => {
    const email = inp.value.trim();
    if (!email || !email.includes('@')) {
      showToast('⚠ Insira um e-mail válido');
      return;
    }
    showToast('✓ Cadastro realizado! Desconto enviado.');
    inp.value = '';
  });
}

//  Init
document.addEventListener('DOMContentLoaded', () => {
  initEnergyTabs();
  initKeyboard();
  initNewsletter();
});
