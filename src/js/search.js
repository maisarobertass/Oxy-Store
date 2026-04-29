// DOM References for Search
const $sOverlay = () => document.getElementById('sOverlay');
const $sInput = () => document.getElementById('sInp');

// Search functions
export function toggleSearch() {
  const overlay = $sOverlay();
  overlay.classList.toggle('on');
  if (overlay.classList.contains('on')) {
    setTimeout(() => $sInput().focus(), 50);
  }
}

export function closeSearch() {
  $sOverlay().classList.remove('on');
}