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
const newItems = [...items];
newItems.forEach((item) => {
  item.onclick = () => {
    openNav.style.display = 'none';
  };
});