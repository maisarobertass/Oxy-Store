// Import showToast
import { showToast } from './toast.js';

// Newsletter function
export function initNewsletter() {
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