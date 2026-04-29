// Energy Tabs function
export function initEnergyTabs() {
  const tabs = document.querySelectorAll('.etab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('on'));
      this.classList.add('on');
    });
  });
}