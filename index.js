const menu = document.getElementById('menu');
const close = document.getElementById('close');
const openNav = document.getElementById('openNav');
const items = document.getElementsByClassName('item');
const audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');
const pors = document.getElementsByClassName('por');
const fas = document.getElementsByClassName('fa');
const connectBtn = document.getElementById('connectBtn');

const languages = document.getElementById('languagesContainer');
const languagesPanel = document.getElementById('languagesPanel');

const frameworks = document.getElementById('frameworks');
const frameworksPanel = document.getElementById('frameworksPanel');

const databases = document.getElementById('databases');
const databasesPanel = document.getElementById('databasesPanel');

const skills = document.getElementById('skills');
const skillsPanel = document.getElementById('skillsPanel');

skillsPanel.addEventListener('click', () => {
  audio.play();
  if (skills.style.display === 'flex') {
    skills.style.display = 'none';
  } else {
    skills.style.display = 'flex';
    frameworks.style.display = 'none';
    languages.style.display = 'none';
    databases.style.display = 'none';
  }
});

databasesPanel.addEventListener('click', () => {
  audio.play();
  if (databases.style.display === 'flex') {
    databases.style.display = 'none';
  } else {
    databases.style.display = 'flex';
    frameworks.style.display = 'none';
    languages.style.display = 'none';
    skills.style.display = 'none';
  }
});

frameworksPanel.addEventListener(('click'), () => {
  audio.play();
  if (frameworks.style.display === 'flex') {
    frameworks.style.display = 'none';
  } else {
    frameworks.style.display = 'flex';
    languages.style.display = 'none';
    databases.style.display = 'none';
    skills.style.display = 'none';
  }
});

languagesPanel.addEventListener('click', () => {
  audio.play();
  if (languages.style.display === 'flex') {
    languages.style.display = 'none';
    languages.style.opacity = 0;
  } else {
    languages.style.display = 'flex';
    languages.style.opacity = '100%';
    frameworks.style.display = 'none';
    databases.style.display = 'none';
    skills.style.display = 'none';
  }
});

connectBtn.addEventListener('mouseover', () => audio4.play());

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
  openNav.style.transform = 'translateX(0)';
  openNav.style.animation = 'slideIn ease-in-out 0.3s';
};
menu.onmouseover = () => {
  document.body.style.cursor = 'hand';
};
close.onclick = () => {
  openNav.style.animation = 'slideOut ease-in-out 0.3s';
  openNav.style.transform = 'translateX(100%)';
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
    description: 'Cash Guys is a Ruby on Rails mobile web application that allows users to keep track of their expenses by adding categories and items to those categories.',
    fullDescription: 'Cash Guys is a Ruby on Rails mobile web application that allows users to keep track of their expenses by adding categories and items to those categories. have a list of transactions associated with a category, so that the user can see how much money it spent and on what.',
    image: './img/pic',
    techs: ['HTML', 'CSS', 'Ruby_on_Rails', 'PostgreSQL'],
    liveLink: 'https://rails-ah0l.onrender.com/',
    sourceLink: 'https://github.com/HabibPayenda/personal_badget',
  },
  {
    name: 'Countries Info',
    details: ['Microverse', 'React App', '2022'],
    description: 'Countries is a small we app which gets details about countries from an API and shows some details about each country like name, flag, latitude, longitude and population.',
    fullDescription: 'Countries is a small we app which gets details about countries from an API and shows some details about each country like name, flag, latitude, longitude and population.',
    image: './img/pic',
    techs: ['CSS', 'JSX', 'AJAX', 'React', 'React_Router', 'Redux'],
    liveLink: 'https://southaisacountries.netlify.app/',
    sourceLink: 'https://github.com/HabibPayenda/Countries',
  },
  {
    name: 'Book Store CMS',
    details: ['Microverse', 'React App', '2022'],
    description: 'A bookstore app that allows a user add a book, displays added book with reviews and rating for each book and allows a user delete a book.',
    fullDescription: 'A bookstore app that allows a user add a book, displays added book with reviews and rating for each book and allows a user delete a book.',
    image: './img/pic',
    techs: ['CSS', 'JSX', 'AJAX', 'React', 'React_Router', 'Redux'],
    liveLink: 'https://bookstore-redux.netlify.app/',
    sourceLink: 'https://github.com/HabibPayenda/BookStore',
  },
  {
    name: 'Math Magicians',
    details: ['Microverse', 'React App', '2022'],
    description: 'A basic Calculator App build with React.js that solves basic arithmetic calculations.',
    fullDescription: 'A basic Calculator App build with React.js that solves basic arithmetic calculations.',
    image: './img/pic',
    techs: ['CSS', 'JSX', 'AJAX', 'React', 'React_Router', 'Redux'],
    liveLink: 'https://6324c2d62139ab0f678d36d3--endearing-sopapillas-233e38.netlify.app/',
    sourceLink: 'https://github.com/HabibPayenda/mathMagicians',
  },
];

const techInfo = {
  CSS: {
    img: './img/css.png',
    info: 'Cascading Style Sheet',
  },
  JSX: {
    img: './img/js.png',
    info: 'Cascading Style Sheet',
  },
  AJAX: {
    img: './img/js.png',
    info: 'Cascading Style Sheet',
  },
  JS: {
    img: './img/js.png',
    info: 'Cascading Style Sheet',
  },
  React: {
    img: './img/react logo.png',
    info: 'Cascading Style Sheet',
  },
  Redux: {
    img: './img/react logo.png',
    info: 'Cascading Style Sheet',
  },
  React_Router: {
    img: './img/react logo.png',
    info: 'Cascading Style Sheet',
  },
  Ruby_on_Rails: {
    img: './img/rails.png',
    info: 'Cascading Style Sheet',
  },
  HTML: {
    img: './img/html.png',
    info: 'Cascading Style Sheet',
  },
  PostgreSQL: {
    img: './img/postgresql.png',
    info: 'Cascading Style Sheet',
  },
};

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
  modalSeeSource.setAttribute('href', modalData.sourceLink);
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
  cardImageContainer.addEventListener('mouseover', () => audio3.play());
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
  projects[i].techs.forEach((item, index) => {
    const techItemContainer = document.createElement('div');
    techItemContainer.setAttribute('id', index);
    techItemContainer.classList.add('techItemContainer');
    const techItem = document.createElement('li');
    techItem.innerText = item;
    const techItemInfo = document.createElement('div');
    techItemInfo.setAttribute('id', index);
    techItemInfo.classList.add('techInfo');
    const techItemInfoImage = document.createElement('img');
    techItemInfoImage.classList.add('techInfoImage');
    // eslint-disable-next-line dot-notation
    techItemInfoImage.setAttribute('src', techInfo[item].img);
    const techInfoText = document.createElement('p');
    techInfoText.classList.add('techInfoText');
    techInfoText.innerText = techInfo[item].info;
    techItemInfo.append(techItemInfoImage, techInfoText);
    techItemContainer.addEventListener('mouseover', () => {
      if (techItemInfo.id === techItemContainer.id) {
        techItemInfo.style.display = 'flex';
      }
    });
    techItemContainer.addEventListener('mouseleave', () => {
      techItemInfo.style.display = 'none';
    });

    techItemContainer.append(techItem, techItemInfo);
    techUsed.append(techItemContainer);
  });

  const seeProject = document.createElement('a');
  seeProject.classList.add('see-project');
  seeProject.innerText = 'See Project';

  seeProject.addEventListener('mouseover', () => audio4.play());
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
const nameTag = document.getElementById('nameTag');

userName.addEventListener('focus', () => {
  nameTag.style.display = 'block';
  nameTag.style.transform = 'translateY(-10px)';
  userName.placeholder = '';
});

userName.addEventListener('focusout', () => {
  if (userName.value === '') {
    nameTag.style.display = 'none';
    nameTag.style.transform = 'translateY(0px)';
    userName.placeholder = 'Enter Your Name:';
  }
});

const email = document.getElementById('email');
const emailTag = document.getElementById('emailTag');

email.addEventListener('focus', () => {
  emailTag.style.display = 'block';
  emailTag.style.transform = 'translateY(-10px)';
  email.placeholder = '';
});

email.addEventListener('focusout', () => {
  if (userName.value === '') {
    emailTag.style.display = 'none';
    emailTag.style.transform = 'translateY(0px)';
    email.placeholder = 'Enter Your Email:';
  }
});

const emailText = document.getElementById('emailText');
const textTag = document.getElementById('textTag');

emailText.addEventListener('focus', () => {
  textTag.style.display = 'block';
  textTag.style.transform = 'translateY(-10px)';
  emailText.innerText = '';
});

emailText.addEventListener('focusout', () => {
  if (userName.value === '') {
    textTag.style.display = 'none';
    textTag.style.transform = 'translateY(0px)';
    emailText.innerText = 'Write your message here!';
  }
});

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
