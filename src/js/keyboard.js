// Import functions
import { closeSearch } from './search.js';
import { closeCart } from './cart.js';

// Keyboard Shortcuts function
export function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCart();
    }
  });
}