// DOM Reference for Toast
const $toast = () => document.getElementById('toast');

// Toast function
export function showToast(message) {
  const toast = $toast();
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}