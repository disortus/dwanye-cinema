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

  card.dataset.name = films.title;
  card.dataset.price = films.priceNormal.replace(/\D/g, "");

  card.innerHTML = `
    <img src="${films.image}" alt="${films.title}" class="cardImage">
    <h3 class="cardTitle">${films.title}</h3>
    <p class="cardDesc">${films.description}</p>

    <div class="cardPrices">
      <div class="priceNormal add-to-cart">
        ${films.priceNormal}
      </div>
    </div>
  `;

  return card;
}

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("add-to-cart")) {
    const card = e.target.closest(".card");
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price);

    if (!cartData[name]) {
      cartData[name] = { qty: 1, price };
    } else {
      cartData[name].qty++;
    }

    document.getElementById("cart").classList.add("active");
    renderCart();
  }
});




function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach(function (films) {
    container.appendChild(createCard(films));
  });
}

const cities = ["Astana", "Almaty", "Shymkent"];

const cinemas = [
    {
        name: "Dwanye Cinema - Mega Silk Way",
        city: "Astana",
        address: "пр. Кабанбай батыра, 62",
        phone: "+7 701 111 22 33",
        workHours: "10:00 - 02:00",
        coords: "51.089, 71.413" // для карты
    },
    {
        name: "Dwanye Cinema - Keruen",
        city: "Astana",
        address: "ул. Достык, 9",
        phone: "+7 701 444 55 66",
        workHours: "10:00 - 03:00",
        coords: "51.128, 71.430"
    },
    {
        name: "Dwanye Cinema - Dostyk Plaza",
        city: "Almaty",
        address: "мкр. Самал-2, 111",
        phone: "+7 727 222 33 44",
        workHours: "10:00 - 02:00",
        coords: "43.233, 76.956"
    },
    {
        name: "Dwanye Cinema - Shymkent Plaza",
        city: "Shymkent",
        address: "пл. Аль-Фараби, 3/1",
        phone: "+7 725 255 66 77",
        workHours: "10:00 - 01:00",
        coords: "42.315, 69.590"
    }
];

const translations = {
    en: {
        "header.main": "Home",
        "header.films": "Movies",
        "header.cinemas": "Cinemas",
        "header.about": "About Us",
        "header.cabinet": "My Account",
        "hero.title": "DIVE INTO THE WORLD OF CINEMA",
        "hero.subtitle": "Best new releases, comfortable halls and unforgettable emotions await you at Dwanye Cinema",
        "hero.btn": "View Schedule",
        "section.popular": "POPULAR",
        "section.recommendations": "RECOMMENDED",
        "footer.rights": "(c) 2025 Company 'tomerloshechki'. All rights reserved.",
        "search.placeholder": "Search films...",
        "contacts.title": "Contacts",
        "contacts.address": "Our Address",
        "contacts.phone": "Phone",
        "contacts.workHours": "Working Hours",
        "contacts.feedback": "Feedback",
        "form.name": "Your Name:",
        "form.name.placeholder": "Enter name",
        "form.email": "Email:",
        "form.email.placeholder": "example@mail.com",
        "form.message": "Message:",
        "form.message.placeholder": "Your message",
        "form.agreement": "I agree to the processing of personal data",
        "form.submit": "Send",
        "about.title": "About Company",
        "bin.title": "Personal Account",
        "bin.message": "This section is under development.",
        "bin.back": "Back to Home"
    },
    ru: {
        "header.main": "Главная",
        "header.films": "Фильмы",
        "header.cinemas": "Кинотеатры",
        "header.about": "О нас",
        "header.cabinet": "Личный кабинет",
        "hero.title": "ПОГРУЗИСЬ В МИР КИНО",
        "hero.subtitle": "Лучшие новинки, комфортные залы и незабываемые эмоции ждут тебя в Dwanye Cinema",
        "hero.btn": "Смотреть афишу",
        "section.popular": "ПОПУЛЯРНОЕ",
        "section.recommendations": "РЕКОМЕНДАЦИИ",
        "footer.rights": "(c) 2025 Компания «томерлошечки». Все права защищены.",
        "search.placeholder": "Поиск фильмов...",
        "contacts.title": "Контакты",
        "contacts.address": "Наш адрес",
        "contacts.phone": "Телефон",
        "contacts.workHours": "Режим работы",
        "contacts.feedback": "Обратная связь",
        "form.name": "Ваше имя:",
        "form.name.placeholder": "Введите имя",
        "form.email": "Email:",
        "form.email.placeholder": "example@mail.com",
        "form.message": "Сообщение:",
        "form.message.placeholder": "Ваше сообщение",
        "form.agreement": "Я согласен на обработку персональных данных",
        "form.submit": "Отправить",
        "about.title": "О компании",
        "bin.title": "Личный кабинет",
        "bin.message": "Этот раздел находится в разработке.",
        "bin.back": "Вернуться на главную"
    }
};

// статус города и языка
let currentCity = localStorage.getItem("currentCity") || "Astana";
let currentLang = localStorage.getItem("currentLang") || "ru";

function saveState() {
    localStorage.setItem("currentCity", currentCity);
    localStorage.setItem("currentLang", currentLang);
    updateUI();
}

function updateUI() {
    const cityDisplay = document.querySelector(".city_name"); // обновление города, доделать
    if (cityDisplay) cityDisplay.textContent = currentCity;

    const langDisplay = document.querySelector(".lang_change"); // обновление языка
    if (langDisplay) {
         const icon = langDisplay.querySelector("img") ? langDisplay.querySelector("img").outerHTML : "";
         langDisplay.innerHTML = `${icon}${currentLang === 'ru' ? 'Rus' : 'Eng'}`;
    }
    
    applyTranslations();
    
    // отображение кинотеатров
    if (document.querySelector(".contacts-container")) {
        renderCinemas();
    }
}

function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) {
            if (el.tagName === "INPUT" && el.getAttribute("placeholder")) {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
}

function renderCinemas() {
    const container = document.querySelector(".contacts-container .contact-info");
    if (!container) return;

    let list = document.getElementById("cinemas-list");
    if (!list) {
        list = document.createElement("div");
        list.id = "cinemas-list";
        list.className = "cinemas-list-container";
        // доделать
        container.appendChild(list);
    }
    
    // найти кинотеатры
    const filteredCinemas = cinemas.filter(c => c.city === currentCity);
    
    let html = `
        <div class="cinemas-header" style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
            <h3 data-i18n="header.cinemas">${currentLang === 'ru' ? 'Кинотеатры' : 'Cinemas'} - ${currentCity}</h3>
        </div>
    `;
    
    if (filteredCinemas.length === 0) {
        html += `<p>${currentLang === 'ru' ? 'В этом городе пока нет наших кинотеатров.' : 'No cinemas in this city yet.'}</p>`;
    } else {
        html += `<ul class="cinema-list" style="list-style: none; padding: 0;">`;
        filteredCinemas.forEach(c => {
            html += `
                <li class="cinema-item" style="margin-bottom: 20px; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                    <strong style="font-size: 1.1em; color: #333;">${c.name}</strong><br>
                    <span style="color: #666;">${c.address}</span><br>
                    <a href="tel:${c.phone}" style="color: #ff7a00; text-decoration: none;">${c.phone}</a><br>
                    <span style="font-size: 0.9em; color: #888;">${c.workHours}</span>
                </li>
            `;
        });
        html += `</ul>`;
    }
    
    list.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    updateUI();

    // переключение города
    const cityChangeBtn = document.querySelector(".city_change");
    if (cityChangeBtn) {
        cityChangeBtn.style.cursor = "pointer";
        cityChangeBtn.addEventListener("click", () => {
            const currentIndex = cities.indexOf(currentCity);
            const nextIndex = (currentIndex + 1) % cities.length;
            currentCity = cities[nextIndex];
            saveState();
        });
    }

    // переключение языка
    const langChangeBtn = document.querySelector(".lang_change");
    if (langChangeBtn) {
        langChangeBtn.style.cursor = "pointer";
        langChangeBtn.addEventListener("click", () => {
             currentLang = currentLang === "ru" ? "en" : "ru";
             saveState();
        });
    }

    // функция поиска
    const searchInput = document.querySelector(".search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const filteredFilms = films.filter(film => 
                film.title.toLowerCase().includes(query)
            );
            
            // контейнеры главной страницы
            if (document.getElementById("cards-container")) {
                 const filteredPopular = filteredFilms.filter(f => f.category === "popular");
                 renderCards(filteredPopular, "cards-container");
            }
            if (document.getElementById("cards-container2")) {
                 const filteredRec = filteredFilms.filter(f => f.category === "recommended");
                 renderCards(filteredRec, "cards-container2");
            }
            
            // контейнер каталога
            if (document.getElementById("catalog-container")) {
                renderCards(filteredFilms, "catalog-container");
            }
        });
    }

    const popularFilms = films.filter(f => f.category === "popular");
    const recommendedFilms = films.filter(f => f.category === "recommended");

    if (document.getElementById("cards-container")) {
        renderCards(popularFilms, "cards-container");
    }
    if (document.getElementById("cards-container2")) {
        renderCards(recommendedFilms, "cards-container2");
    }
    if (document.getElementById("catalog-container")) {
        renderCards(films, "catalog-container"); 
    }
});

// валидация формы
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const agreement = document.getElementById("agreement").checked;
    const formMessage = document.getElementById("formMessage");

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

      alert("Сообщение успешно отправлено!");
      console.log("Form submitted:", { name, email, message });
      formMessage.textContent = "Сообщение успешно отправлено!";
      formMessage.classList.add("success");
      formMessage.style.display = "block";
      contactForm.reset();
    }
  });
}


// смену языков доделать
// доработать смену городов, разныце цены и расписания для разных городов
// добавить карту, картинки

/// переход страниц

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let url = this.href;
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = url;
        }, 500);
    });
});


/// корзина
let cartData = {};

function addToCart(button) {
  const card = button.closest(".card");
  const name = card.dataset.name;
  const price = parseInt(card.dataset.price);

  cartData[name] ? cartData[name].qty++ : cartData[name] = { qty: 1, price };
  document.getElementById("cart").classList.add("active");
  renderCart();
}

function changeQty(name, delta) {
  cartData[name].qty += delta;
  if (cartData[name].qty <= 0) delete cartData[name];
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  cartItems.innerHTML = "";

  let total = 0;
  for (let name in cartData) {
    const item = cartData[name];
    total += item.qty * item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${name} (₸${item.price})</span>
      <div>
        <button onclick="changeQty('${name}', -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${name}', 1)">+</button>
      </div>
    `;
    cartItems.appendChild(div);
  }

  totalPrice.innerText = `Итого: ₸${total}`;
}
