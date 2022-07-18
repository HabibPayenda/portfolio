const menu = document.getElementById('menu');
const close = document.getElementById('close');
const openNav = document.getElementById('openNav');
const items = document.getElementsByClassName('item');
menu.onclick = () => {
  openNav.style.display = 'block';
};
close.onclick = () => {
  openNav.style.display = 'none';
};
for (let i = 0; i < items.length; i + 1) {
  items[i].onclick = () => {
    openNav.style.display = 'none';
  };
}