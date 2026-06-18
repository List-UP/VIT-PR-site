const heroSlides = [...document.querySelectorAll('.hero__slide')];
let heroIndex = 0;

setInterval(() => {
  heroSlides[heroIndex].classList.remove('is-active');
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add('is-active');
}, 4200);

const revealItems = [...document.querySelectorAll('.reveal')];
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, {
  threshold: 0.18,
  rootMargin: '-4% 0px -8% 0px'
});

revealItems.forEach((item) => revealObserver.observe(item));

const models = [
  {
    src: 'img/source-1.jpg',
    alt: 'BOTO CPD25 збоку на складі',
    label: 'В наявності',
    title: 'BOTO CPD25',
    description: 'Електронавантажувач готовий до продажу без очікування постачання: LiFePO4 батарея, вільний підйом, бокове зміщення та комплект для обслуговування.',
    load: '2.5 т',
    height: '4.5 м',
    battery: 'LiFePO4',
    price: '18 000 $'
  },
  {
    src: 'img/source-2.jpg',
    alt: 'BOTO CPD20 передній ракурс',
    label: 'Електро',
    title: 'BOTO CPD20',
    description: 'Електронавантажувач готовий до продажу без очікування постачання: LiFePO4 батарея, вільний підйом, бокове зміщення та комплект для обслуговування.',
    load: '2.0 т',
    height: '3.3 м',
    battery: 'LiFePO4',
    price: '15 900 $'
  },
  {
    src: 'img/source-3.jpg',
    alt: 'BOTO CPD30 робоча зона та вила',
    label: 'Посилена',
    title: 'BOTO CPD30',
    description: 'Електронавантажувач готовий до продажу без очікування постачання: LiFePO4 батарея, вільний підйом, бокове зміщення та комплект для обслуговування.',
    load: '3.0 т',
    height: '4.8 м',
    battery: 'LiFePO4',
    price: '21 400 $'
  },
  {
    src: 'img/source-4.jpg',
    alt: 'BOTO CPD15 вид ззаду',
    label: 'Компактна',
    title: 'BOTO CPD15',
    description: 'Електронавантажувач готовий до продажу без очікування постачання: LiFePO4 батарея, вільний підйом, бокове зміщення та комплект для обслуговування.',
    load: '1.5 т',
    height: '3.0 м',
    battery: 'LiFePO4',
    price: '13 800 $'
  },
  {
    src: 'img/source-5.jpg',
    alt: 'BOTO CPD35 елементи керування',
    label: 'Для фур',
    title: 'BOTO CPD35',
    description: 'Електронавантажувач готовий до продажу без очікування постачання: LiFePO4 батарея, вільний підйом, бокове зміщення та комплект для обслуговування.',
    load: '3.5 т',
    height: '5.0 м',
    battery: 'LiFePO4',
    price: '24 700 $'
  },
  {
    src: 'img/source-1.jpg',
    alt: 'BOTO CPD25 Pro збоку на складі',
    label: 'Pro',
    title: 'BOTO CPD25 Pro',
    description: 'Електронавантажувач готовий до продажу без очікування постачання: LiFePO4 батарея, вільний підйом, бокове зміщення та комплект для обслуговування.',
    load: '2.5 т',
    height: '6.0 м',
    battery: 'LiFePO4',
    price: '22 300 $'
  }
];

const lightboxImages = [
  { src: 'img/source-1.jpg', alt: 'BOTO CPD25 збоку на складі' },
  { src: 'img/source-2.jpg', alt: 'BOTO CPD25 передній ракурс' },
  { src: 'img/source-3.jpg', alt: 'BOTO CPD25 робоча зона та вила' },
  { src: 'img/source-4.jpg', alt: 'BOTO CPD25 вид ззаду' },
  { src: 'img/source-5.jpg', alt: 'BOTO CPD25 елементи керування' }
];

const modelCards = [...document.querySelectorAll('[data-model-card]')];
const modelImage = document.querySelector('[data-model-image]');
const modelLabel = document.querySelector('[data-model-label]');
const modelTitle = document.querySelector('[data-model-title]');
const modelDescription = document.querySelector('[data-model-description]');
const modelLoad = document.querySelector('[data-model-load]');
const modelHeight = document.querySelector('[data-model-height]');
const modelBattery = document.querySelector('[data-model-battery]');
const modelPrice = document.querySelector('[data-model-price]');
const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCounter = document.querySelector('[data-lightbox-counter]');
const lightboxOpenButton = document.querySelector('[data-lightbox-open]');
const lightboxCloseButton = document.querySelector('[data-lightbox-close]');
const lightboxPrevButton = document.querySelector('[data-lightbox-prev]');
const lightboxNextButton = document.querySelector('[data-lightbox-next]');
let modelIndex = 0;
let lightboxIndex = 0;

function updateLightboxImage() {
  lightboxImage.classList.add('is-changing');

  setTimeout(() => {
    lightboxImage.src = lightboxImages[lightboxIndex].src;
    lightboxImage.alt = lightboxImages[lightboxIndex].alt;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    lightboxImage.classList.remove('is-changing');
  }, 120);
}

function setLightboxImage(nextIndex) {
  lightboxIndex = (nextIndex + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function setModel(nextIndex) {
  modelIndex = (nextIndex + models.length) % models.length;
  const model = models[modelIndex];

  modelCards.forEach((card, index) => {
    card.classList.toggle('is-active', index === modelIndex);
  });

  modelImage.classList.add('is-changing');

  setTimeout(() => {
    modelImage.src = model.src;
    modelImage.alt = model.alt;
    modelLabel.textContent = model.label;
    modelTitle.textContent = model.title;
    modelDescription.textContent = model.description;
    modelLoad.textContent = model.load;
    modelHeight.textContent = model.height;
    modelBattery.textContent = model.battery;
    modelPrice.textContent = model.price;
    modelImage.classList.remove('is-changing');
  }, 140);

}

function openLightbox(startIndex = 0) {
  lightboxIndex = (startIndex + lightboxImages.length) % lightboxImages.length;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxImage.src = lightboxImages[lightboxIndex].src;
  lightboxImage.alt = lightboxImages[lightboxIndex].alt;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  lightboxCloseButton.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxOpenButton.focus();
}

modelCards.forEach((card, index) => {
  card.addEventListener('click', (event) => {
    setModel(index);
    if (event.target.closest('[data-model-photo]')) {
      openLightbox(0);
    }
  });
});

lightboxOpenButton.addEventListener('click', openLightbox);
lightboxCloseButton.addEventListener('click', closeLightbox);
lightboxPrevButton.addEventListener('click', () => setLightboxImage(lightboxIndex - 1));
lightboxNextButton.addEventListener('click', () => setLightboxImage(lightboxIndex + 1));

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('is-open')) {
    return;
  }

  if (event.key === 'Escape') {
    closeLightbox();
  }

  if (event.key === 'ArrowLeft') {
    setLightboxImage(lightboxIndex - 1);
  }

  if (event.key === 'ArrowRight') {
    setLightboxImage(lightboxIndex + 1);
  }
});
