const menu = document.getElementById('menu');
const close = document.getElementById('close');
const openNav = document.getElementById('openNav');
const items = document.getElementsByClassName('item');
const audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2');
const pors = document.getElementsByClassName('por');
const fas = document.getElementsByClassName('fa');

Array.from(fas).forEach((fa) => {
  fa.addEventListener('mouseover', () => {
    audio2.play();
  });
});
Array.from(pors).forEach((por) => {
  por.addEventListener('mouseover', () => {
    audio.play();
  });
});

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
    name: 'Cash Guys',
    details: ['Microverse', 'Ruby on Rails App', '2023'],
    description: 'CashBack is a Ruby on Rails mobile web application that allows users to keep track of their expenses by adding categories and items to those categories.',
    fullDescription: 'CashBack is a Ruby on Rails mobile web application that allows users to keep track of their expenses by adding categories and items to those categories. have a list of transactions associated with a category, so that the user can see how much money it spent and on what.',
    image: './img/pic',
    techs: ['HTML', 'CSS', 'Ruby on Rails', 'PostgreSQL'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Countries Info',
    details: ['Microverse', 'React App', '2022'],
    description: 'Countries is a small we app which gets details about countries from an API and shows some details about each country like name, flag, latitude, longitude and population.',
    fullDescription: 'Countries is a small we app which gets details about countries from an API and shows some details about each country like name, flag, latitude, longitude and population.',
    image: './img/pic',
    techs: ['CSS', 'JSX', 'AJAX', 'React', 'React Router', 'Redux'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'A daily selection of privately personalized reads: no accounts or sign-ups required.',
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/pic',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    description: 'A daily selection of privately personalized reads: no accountsor sign-ups required.',
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './img/pic',
    techs: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const worksSection = document.getElementById('Portfolio');
const modalContainer = document.getElementById('modalContainer');

/// //////ModalCreator

const modalCreator = () => {
  const clicked = document.getElementById('clicked');
  const item = [...clicked.classList];
  const selectedItem = item[1].split('d');
  const num = selectedItem[1];
  const modalData = projects[num - 1];
  const projectModal = document.createElement('div');
  projectModal.classList.add('projectModal');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-close', 'closeIcon2');
  closeIcon.onclick = () => {
    clicked.removeAttribute('id', 'clicked');
    projectModal.style.display = 'none';
    modalContainer.style.display = 'none';
  };

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('main-title');
  modalTitle.innerText = modalData.name;

  const modalDetails = document.createElement('ul');
  modalDetails.style.alignSelf = 'flex-start';
  modalDetails.style.marginLeft = '16px';
  modalDetails.style.marginTop = '22px';

  modalData.details.forEach((detail) => {
    const modalDetailLi = document.createElement('li');
    modalDetailLi.classList.add('sub-item');
    modalDetailLi.innerText = detail;
    modalDetails.append(modalDetailLi);
  });

  const modalImage = document.createElement('div');
  modalImage.classList.add('modal-card-img');
  modalImage.style.backgroundImage = `url(${modalData.image}B${num}.png)`;

  const modalText = document.createElement('p');
  modalText.classList.add('modal-text');
  modalText.innerText = modalData.fullDescription;

  const modalTechUsed = document.createElement('ul');
  modalTechUsed.classList.add('tech-used-modal');
  modalTechUsed.style.alignSelf = 'flex-start';
  modalTechUsed.style.marginLeft = '16px';
  modalData.techs.forEach((item) => {
    const modalTechItem = document.createElement('li');
    modalTechItem.innerText = item;
    modalTechUsed.append(modalTechItem);
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.flexDirection = 'row';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.marginTop = '25px';

  const btnLive = document.createElement('div');
  btnLive.classList.add('see-project', 'modal-see');

  const btnSource = document.createElement('div');
  btnSource.classList.add('see-project', 'modal-see');

  const liveIcon = document.createElement('i');
  liveIcon.classList.add('fas', 'fa', 'fa-external-link');

  const sourceIcon = document.createElement('i');
  sourceIcon.classList.add('fab', 'fa-github');

  const modalSeeLive = document.createElement('a');
  // modalSeeLive.classList.add('see-project', 'modal-see');
  modalSeeLive.innerText = 'See Live';
  modalSeeLive.setAttribute('href', modalData.liveLink);
  modalSeeLive.onclick = () => {
    projectModal.style.display = 'none';
  };

  btnLive.append(modalSeeLive, liveIcon);

  const modalSeeSource = document.createElement('a');
  // modalSeeSource.classList.add('see-project', 'modal-see');
  modalSeeSource.innerText = 'See Source';
  modalSeeSource.setAttribute('href', modalData.liveLink);
  modalSeeSource.onclick = () => {
    projectModal.style.display = 'none';
  };

  btnSource.append(modalSeeSource, sourceIcon);

  const modalDetailsContainer = document.createElement('div');
  modalDetailsContainer.classList.add('modalDetailsContainer');
  const leftContainer = document.createElement('div');
  leftContainer.classList.add('modalTextContainer');
  const rightContainer = document.createElement('div');
  leftContainer.append(modalText);
  buttonContainer.append(btnLive, btnSource);
  rightContainer.append(modalTechUsed, buttonContainer);
  modalDetailsContainer.append(leftContainer, rightContainer);
  projectModal.append(closeIcon, modalTitle, modalDetails, modalImage, modalDetailsContainer);
  modalContainer.append(projectModal);
};

for (let i = 0; i < projects.length; i += 1) {
  const num = i + 1;
  const card = document.createElement('div');
  card.setAttribute('id', JSON.stringify(num));
  card.classList.add('card', `card${num}`);
  const cardImageContainer = document.createElement('div');
  cardImageContainer.classList.add('cardImageContainer');
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-img', `card-img-${num}`);
  cardImage.style.backgroundImage = window.matchMedia('(min-width: 768px)') ? `url(${projects[i].image}B${num}.png)` : `url(${projects[i].image}${num}.png)`;
  cardImageContainer.append(cardImage);
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
  seeProject.setAttribute('href', `#${JSON.stringify(num)}`);
  seeProject.onclick = () => {
    modalContainer.style.display = 'flex';
    seeProject.parentElement.parentElement.setAttribute('id', 'clicked');
    modalCreator();
  };

  detailsContainer.append(mainTitle, subDeatails, cardText, techUsed, seeProject);
  card.append(cardImageContainer, detailsContainer);
  worksSection.append(card);
}

const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const emailText = document.getElementById('emailText');

const userDataCheck = !!localStorage.getItem('userData');
if (userDataCheck) {
  const data = JSON.parse(localStorage.getItem('userData'));
  userName.value = data.userName;
  email.value = data.email;
  emailText.value = data.emailText;
}

const message = document.getElementById('email-text');
message.style.color = 'red';
message.innerText = 'Email should be lowercase!';

const checkEmail = () => {
  const emailValue = email.value.trim();
  if (emailValue.match(/[A-Z]/)) {
    message.style.display = 'block';
    return false;
  }
  message.style.display = 'none';
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmail();
});

form.addEventListener('submit', () => {
  const userData = {
    userName: userName.value,
    email: email.value,
    emailText: emailText.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});
