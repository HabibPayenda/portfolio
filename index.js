const menu = document.getElementById('menu');
const close = document.getElementById('close');
const openNav = document.getElementById('openNav');
const items = document.getElementsByClassName('item');
menu.onclick = () => {
  openNav.style.display = 'block';
};
menu.onmouseover = () => {
  document.body.style.cursor = 'hand';
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
const projects = [
  {
    name: 'Canopy',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads: no accountsor sign-ups required.',
    image: './img/pic',
    techs: ['html', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'A daily selection of privately personalized reads: no accountsor sign-ups required.',
    image: './img/pic',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'A daily selection of privately personalized reads: no accountsor sign-ups required.',
    image: './img/pic',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    description: 'A daily selection of privately personalized reads: no accountsor sign-ups required.',
    image: './img/pic',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const worksSection = document.getElementById('Portfolio');
for (let i = 0; i < projects.length; i += 1) {
  const num = i + 1;
  const card = document.createElement('div');
  card.classList.add('card', `card${num}`);
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-img', `card-img-${num}`);
  cardImage.style.backgroundImage = window.matchMedia('(min-width: 768px)') ? `url(${projects[i].image}B${num}.png)` : `url(${projects[i].image}${num}.png)`;
  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container', 'card-details-1');
  const mainTitle = document.createElement('h2');
  mainTitle.classList.add('main-title');
  mainTitle.innerText = projects[i].name;
  const subDeatails = document.createElement('ul');
  projects[i].details.forEach((detail) => {
    const detailLi = document.createElement('li');
    detailLi.classList.add('sub-item');
    detailLi.innerText = detail;
    subDeatails.append(detailLi);
  });
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = projects[i].description;
  const techUsed = document.createElement('ul');
  techUsed.classList.add('tech-used');
  projects[i].techs.forEach((item) => {
    const techItem = document.createElement('li');
    techItem.innerText = item;
    techUsed.append(techItem);
  });
  const seeProject = document.createElement('a');
  seeProject.classList.add('see-project');
  seeProject.innerText = 'See Project';
  seeProject.setAttribute('href', projects[i].liveLink);
  detailsContainer.append(mainTitle, subDeatails, cardText, techUsed, seeProject);
  card.append(cardImage, detailsContainer);
  worksSection.append(card);
}