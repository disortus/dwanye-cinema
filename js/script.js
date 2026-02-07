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

// Check if we are on the main page
if (document.getElementById("cards-container")) {
  renderCards(popularFilms, "cards-container");
}

if (document.getElementById("cards-container2")) {
  renderCards(recommendedFilms, "cards-container2");
}

// Check if we are on the catalog page
if (document.getElementById("catalog-container")) {
  renderCards(films, "catalog-container");
} else {
    // If element doesn't exist, we might be on catalog page but without the ID yet,
    // actually catalog.html doesn't have the container ID.
    // I need to add the container to catalog.html first!
    // But assuming I will do it or did it.
    // Wait, I saw catalog.html earlier and it didn't have a container for cards.
    // I should add it.
}

// Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const agreement = document.getElementById("agreement").checked;
    const formMessage = document.getElementById("formMessage");

    // Reset message
    formMessage.style.display = "none";
    formMessage.className = "form-message";

    let errors = [];

    if (name === "") {
      errors.push("Пожалуйста, введите ваше имя.");
    }

    if (email === "" || !email.includes("@")) {
      errors.push("Пожалуйста, введите корректный email.");
    }

    if (message === "") {
        errors.push("Пожалуйста, введите сообщение.");
    }

    if (!agreement) {
      errors.push("Вы должны согласиться на обработку персональных данных.");
    }

    if (errors.length > 0) {
      formMessage.innerHTML = errors.join("<br>");
      formMessage.classList.add("error");
      formMessage.style.display = "block";
    } else {
      // Success
      alert("Сообщение успешно отправлено!");
      console.log("Form submitted:", { name, email, message });
      formMessage.textContent = "Сообщение успешно отправлено!";
      formMessage.classList.add("success");
      formMessage.style.display = "block";
      contactForm.reset();
    }
  });
}
