/* OxyStore — Main JavaScript */

'use strict';

// Imports
import { toggleSearch, closeSearch } from './js/search.js';
import { toggleCart, closeCart, addCart } from './js/cart.js';
import { showToast } from './js/toast.js';
import { initEnergyTabs } from './js/energy.js';
import { initKeyboard } from './js/keyboard.js';
import { initNewsletter } from './js/newsletter.js';

// Make functions global for HTML onclick
window.toggleSearch = toggleSearch;
window.closeSearch = closeSearch;
window.toggleCart = toggleCart;
window.closeCart = closeCart;
window.addCart = addCart;
window.showToast = showToast;

//  Init
document.addEventListener('DOMContentLoaded', () => {
  initEnergyTabs();
  initKeyboard();
  initNewsletter();
});
