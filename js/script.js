const films = [
  {
    id: 1,
    title: "Казнить нельзя помиловать (2026)",
    description:
      "В недалёком будущем детектив оказывается на суде, обвинённый в убийстве собственной жены.",
    image: "./imgs/kaznit-nelsya-pomilovat.jpg",
    category: "popular",
    priceNormal: "от 1300 ₸",
  },
  {
    id: 2,
    title: "Возвращение в Сайлент-Хилл (2026)",
    description:
      "Джеймс Сандерленд получает таинственное письмо и отправляется в Сайлент Хилл.",
    image: "./imgs/silent-hill.jpg",
    category: "popular",
    priceNormal: "от 1300 ₸",
  },
  {
    id: 3,
    title: "28 лет спустя: Часть II. Храм костей (2026)",
    description: "Продолжение постапокалиптической истории.",
    image: "./imgs/letspystya.jpg",
    category: "popular",
    priceNormal: "от 1300 ₸",
  },
  {
    id: 4,
    title: "Гренландия 2: Миграция (2026)",
    description: "Человечество пытается выжить после глобальной катастрофы.",
    image: "./imgs/grenlandia.jpg",
    category: "popular",
    priceNormal: "от 1300 ₸",
  },
  {
    id: 5,
    title: "Марти Великолепный (2026)",
    description:
      "Молодой амбициозный парень Марти Маузер готов пойти на всё ради осуществления своей мечты.",
    image: "./imgs/dune2.jpg",
    category: "recommended",
    priceNormal: "от 1300 ₸",
  },
  {
    id: 6,
    title: "Горничная (2026)",
    description:
      "Милли мечтает начать жизнь с чистого листа и с радостью принимает работу горничной в роскошном особняке семьи Винчестер.",
    image: "./imgs/oppenheimer.jpg",
    category: "recommended",
    priceNormal: "от 1300 ₸",
  },
  {
    id: 7,
    title: "На помощь! (2026)",
    description:
      "Двое коллег оказываются на необитаемом острове, став единственными выжившими после авиакатастрофы.",
    image: "./imgs/blade-runner.jpg",
    category: "recommended",
    priceNormal: "от 1300 ₸",
  },
];

function createCard(films) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${films.image}" alt="${films.title}" class="cardImage">
    <h3 class="cardTitle">${films.title}</h3>
    <p class="cardDesc">${films.description}</p>
    <div class="cardPrices">
      <div class="priceNormal">${films.priceNormal}</div>
    </div>
  `;

  return card;
}

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach(function (films) {
    container.appendChild(createCard(films));
  });
}

const popularFilms = films.filter(function (films) {
  return films.category === "popular";
});

const recommendedFilms = films.filter(function (films) {
  return films.category === "recommended";
});

renderCards(popularFilms, "cards-container");
renderCards(recommendedFilms, "cards-container2");
