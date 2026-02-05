const films = [
  {
    id: 1,
    title: "Казнить нельзя помиловать (2026)",
    description: "В недалёком будущем детектив оказывается на суде, обвинённый в убийстве собственной жены. У него есть всего 90 минут, чтобы доказать свою невиновность перед ИИ-судьёй.",
    image: "./imgs/kaznit-nelsya-pomilovat.jpg"
  },
  {
    id: 2,
    title: "Возвращение в Сайлент-Хилл (2026)",
    description: "Джеймс Сандерленд тяжело переживает разлуку со своей возлюбленной и получает таинственное письмо, которое приводит его в город Сайлент Хилл.",
    image: "./imgs/silent-hill.jpg"
  },
  {
    id: 3,
    title: "28 лет спустя: Часть II. Храм костей (2026)",
    description: "Расширяя мир, созданный Дэнни Бойлом и Алексом Гарлендом в «28 лет спустя», но переворачивая его с ног на голову.",
    image: "./imgs/letspystya.jpg"
  },
  {
    id: 4,
    title: "Гренландия 2: Миграция (2026)",
    description: "Отголоски катастрофы, которая обрушилась на Землю пять лет назад, нависли над человечеством.",
    image: "./imgs/grenlandia.jpg"
  }
];

const container = document.getElementById("cards-container");

function createCard(films) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${films.image}" alt="Фото" class="cardImage">
    <h3 class="cardTitle"><strong>${films.title}</strong></h3>
    <p class="cardDesc">${films.description}</p>
  `;
  return card;
}


function renderCards(data) {
  container.innerHTML = ""; 

  data.forEach(function(item) {
    const cardElement = createCard(item);
    container.appendChild(cardElement);
  });
}

renderCards(films);
