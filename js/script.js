const films = [
  {
    id: 1,
    title: "Казнить нельзя помиловать (2026)",
    description:
      "В недалёком будущем детектив оказывается на суде, обвинённый в убийстве собственной жены.",
    image: "./imgs/kaznit-nelsya-pomilovat.jpg",
    category: "popular",
    prices: {
        "Astana": 1500,
        "Almaty": 1800,
        "Shymkent": 1200
    }
  },
  {
    id: 2,
    title: "Возвращение в Сайлент-Хилл (2026)",
    description:
      "Джеймс Сандерленд получает таинственное письмо и отправляется в Сайлент Хилл.",
    image: "./imgs/silent-hill.jpg",
    category: "popular",
    prices: {
        "Astana": 1600,
        "Almaty": 2000,
        "Shymkent": 1300
    }
  },
  {
    id: 3,
    title: "28 лет спустя: Часть II. Храм костей (2026)",
    description: "Продолжение постапокалиптической истории.",
    image: "./imgs/letspystya.jpg",
    category: "popular",
    prices: {
        "Astana": 1400,
        "Almaty": 1700,
        "Shymkent": 1100
    }
  },
  {
    id: 4,
    title: "Гренландия 2: Миграция (2026)",
    description: "Человечество пытается выжить после глобальной катастрофы.",
    image: "./imgs/grenlandia.jpg",
    category: "popular",
    prices: {
        "Astana": 1500,
        "Almaty": 1800,
        "Shymkent": 1200
    }
  },
  {
    id: 5,
    title: "Марти Великолепный (2026)",
    description:
      "Молодой амбициозный парень Марти Маузер готов пойти на всё ради осуществления своей мечты.",
    image: "./imgs/dune2.jpg",
    category: "recommended",
    prices: {
        "Astana": 1300,
        "Almaty": 1500,
        "Shymkent": 1000
    }
  },
  {
    id: 6,
    title: "Горничная (2026)",
    description:
      "Милли мечтает начать жизнь с чистого листа и с радостью принимает работу горничной в роскошном особняке семьи Винчестер.",
    image: "./imgs/oppenheimer.jpg",
    category: "recommended",
    prices: {
        "Astana": 1300,
        "Almaty": 1600,
        "Shymkent": 1100
    }
  },
  {
    id: 7,
    title: "На помощь! (2026)",
    description:
      "Двое коллег оказываются на необитаемом острове, став единственными выжившими после авиакатастрофы.",
    image: "./imgs/blade-runner.jpg",
    category: "recommended",
    prices: {
        "Astana": 1400,
        "Almaty": 1700,
        "Shymkent": 1100
    }
  },
  // New Movies
  {
    id: 8,
    title: "Носферату (2025)",
    description: "Готическая история об одержимости между молодой женщиной и страшным вампиром.",
    image: "./imgs/nosferatu.jpg",
    category: "popular",
    prices: { "Astana": 1500, "Almaty": 1900, "Shymkent": 1200 }
  },
  {
    id: 9,
    title: "Микки 17 (2025)",
    description: "Клон участвует в колонизации ледяного мира Нильфхейм.",
    image: "./imgs/mickey17.jpg",
    category: "recommended",
    prices: { "Astana": 1600, "Almaty": 2000, "Shymkent": 1300 }
  },
  {
    id: 10,
    title: "Балерина (2025)",
    description: "Спин-офф вселенной Джона Уика о наемной убийце.",
    image: "./imgs/ballerina.jpg",
    category: "popular",
    prices: { "Astana": 1500, "Almaty": 1800, "Shymkent": 1200 }
  },
  {
    id: 11,
    title: "Властелин колец: Война рохирримов (2025)",
    description: "Эпическая битва, сформировавшая Средиземье.",
    image: "./imgs/lotr_anime.jpg",
    category: "recommended",
    prices: { "Astana": 1400, "Almaty": 1700, "Shymkent": 1100 }
  },
  {
    id: 12,
    title: "Аватар: Огонь и пепел (2025)",
    description: "Новая глава саги Джеймса Кэмерона на Пандоре.",
    image: "./imgs/avatar3.jpg",
    category: "popular",
    prices: { "Astana": 2000, "Almaty": 2500, "Shymkent": 1800 }
  }
];

const cities = ["Astana", "Almaty", "Shymkent"];

const cinemas = [
    {
        name: "Dwanye Cinema - Mega Silk Way",
        city: "Astana",
        address: "пр. Кабанбай батыра, 62",
        phone: "+7 701 111 22 33",
        workHours: "10:00 - 02:00",
        coords: "51.089, 71.413"
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
        "section.why_us": "Why Choose Us",
        "feature.popcorn": "Delicious Popcorn",
        "feature.popcorn_desc": "Only fresh popcorn with various flavors.",
        "feature.comfort": "Comfort",
        "feature.comfort_desc": "Soft recliner seats for complete relaxation.",
        "feature.sound": "Dolby Atmos Sound",
        "feature.sound_desc": "Immerse yourself in the movie atmosphere with surround sound.",
        "feature.online_tickets": "Online Tickets",
        "feature.online_tickets_desc": "Buy without queues through our website.",
        "footer.rights": "(c) 2025 Dwanye Cinema. All rights reserved.",
        "search.all": "All Categories",
        "search.placeholder": "Search films...",
        "bin.title": "Personal Account",
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
        "bin.back": "Back to Home",
        "bin.login": "Login",
        "bin.register": "Register",
        "bin.logout": "Logout",
        "bin.email": "Email",
        "bin.password": "Password",
        "bin.name": "Name",
        "bin.login_btn": "Sign In",
        "bin.register_btn": "Sign Up",
        "bin.welcome": "Welcome, ",
        "bin.no_account": "Don't have an account?",
        "bin.has_account": "Already have an account?",
        "bin.login_required": "Please login to place an order",
        "cart.title": "Cart",
        "cart.total": "Total: ",
        "cart.order": "Order now",
        "city.astana": "Astana",
        "city.almaty": "Almaty",
        "city.shymkent": "Shymkent",
        "cinema_header": "Cinemas - ",
        "no_cinemas": "No cinemas in this city yet.",
        "price_from": "from",
        "about.text1": "Kinopark — the largest cinema chain in Kazakhstan, offering viewers modern screening technologies, high level of service and comfortable halls.",
        "about.text2": "The company actively develops cinema culture, introducing IMAX, laser projectors, premium hall formats and convenient digital services for ticket purchase.",
        "about.text3": "Today Kinopark is dozens of cinemas, thousands of viewers daily and constant development of the entertainment industry.",
        "about.stats.cinemas": "Cinemas across the country",
        "about.stats.halls": "Halls with best equipment",
        "about.stats.viewers": "Happy viewers annually",
        "about.btn.view_cinemas": "View cinema list"
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
        "section.why_us": "Почему выбирают нас",
        "feature.popcorn": "Вкуснейший попкорн",
        "feature.popcorn_desc": "Только свежий попкорн с разнообразными вкусами.",
        "feature.comfort": "Комфорт",
        "feature.comfort_desc": "Мягкие кресла-реклайнеры для полного расслабления.",
        "feature.sound": "Звук Dolby Atmos",
        "feature.sound_desc": "Погружение в атмосферу фильма с объемным звуком.",
        "feature.online_tickets": "Онлайн билеты",
        "feature.online_tickets_desc": "Покупка без очередей через наш сайт.",
        "footer.rights": "(c) 2025 Компания «Dwanye Cinema». Все права защищены.",
        "search.all": "Все категории",
        "search.placeholder": "Поиск фильмов...",
        "bin.title": "Личный кабинет",
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
        "bin.back": "Вернуться на главную",
        "bin.login": "Вход",
        "bin.register": "Регистрация",
        "bin.logout": "Выйти",
        "bin.email": "Email",
        "bin.password": "Пароль",
        "bin.name": "Имя",
        "bin.login_btn": "Войти",
        "bin.register_btn": "Зарегистрироваться",
        "bin.welcome": "Добро пожаловать, ",
        "bin.no_account": "Нет аккаунта?",
        "bin.has_account": "Уже есть аккаунт?",
        "bin.login_required": "Пожалуйста, войдите в систему для оформления заказа",
        "cart.title": "Корзина",
        "cart.total": "Итого: ",
        "cart.order": "Заказать сейчас",
        "city.astana": "Астана",
        "city.almaty": "Алматы",
        "city.shymkent": "Шымкент",
        "cinema_header": "Кинотеатры - ",
        "no_cinemas": "В этом городе пока нет наших кинотеатров.",
        "price_from": "от",
        "about.text1": "Kinopark — крупнейшая сеть кинотеатров в Казахстане, предлагающая зрителям современные технологии кинопоказа, высокий уровень сервиса и комфортные залы.",
        "about.text2": "Компания активно развивает культуру кино, внедряя IMAX, лазерные проекторы, премиальные форматы залов и удобные цифровые сервисы для покупки билетов.",
        "about.text3": "Сегодня Kinopark — это десятки кинотеатров, тысячи зрителей ежедневно и постоянное развитие индустрии развлечений.",
        "about.stats.cinemas": "Кинотеатров по всей стране",
        "about.stats.halls": "Залов с лучшим оборудованием",
        "about.stats.viewers": "Счастливых зрителей ежегодно",
        "about.btn.view_cinemas": "Смотреть список кинотеатров"
    },
    kk: {
        "header.main": "Басты бет",
        "header.films": "Фильмдер",
        "header.cinemas": "Кинотеатрлар",
        "header.about": "Біз туралы",
        "header.cabinet": "Жеке кабинет",
        "hero.title": "КИНО ӘЛЕМІНЕ ЕН",
        "hero.subtitle": "Dwanye Cinema-да ең жақсы жаңалықтар, жайлы залдар және ұмытылмас сезімдер күтеді",
        "hero.btn": "Кестесін көру",
        "section.popular": "ТАНЫМАЛ",
        "section.recommendations": "ҰСЫНЫЛАТЫН",
        "section.why_us": "Неге бізді таңдайды",
        "feature.popcorn": "Дәмді попкорн",
        "feature.popcorn_desc": "Тек түрлі дәмдері бар жаңа піскен попкорн.",
        "feature.comfort": "Жайлылық",
        "feature.comfort_desc": "Толық демалуға арналған жұмсақ орындықтар.",
        "feature.sound": "Dolby Atmos дыбысы",
        "feature.sound_desc": "Көлемді дыбыспен фильм атмосферасына ену.",
        "feature.online_tickets": "Онлайн билеттер",
        "feature.online_tickets_desc": "Кезексіз біздің сайт арқылы сатып алу.",
        "footer.rights": "(c) 2025 Dwanye Cinema. Барлық құқықтар қорғалған.",
        "search.placeholder": "Фильмдерді іздеу...",
        "contacts.title": "Байланыс",
        "contacts.address": "Біздің мекенжай",
        "contacts.phone": "Телефон",
        "contacts.workHours": "Жұмыс уақыты",
        "contacts.feedback": "Кері байланыс",
        "form.name": "Сіздің атыңыз:",
        "form.name.placeholder": "Атыңызды енгізіңіз",
        "form.email": "Email:",
        "form.email.placeholder": "example@mail.com",
        "form.message": "Хабарлама:",
        "form.message.placeholder": "Сіздің хабарламаңыз",
        "form.agreement": "Мен дербес деректерді өңдеуге келісемін",
        "form.submit": "Жіберу",
        "about.title": "Компания туралы",
        "bin.title": "Жеке кабинет",
        "bin.message": "Бұл бөлім әзірленуде.",
        "bin.back": "Басты бетке",
        "bin.login": "Кіру",
        "bin.register": "Тіркелу",
        "bin.logout": "Шығу",
        "bin.email": "Email",
        "bin.password": "Құпия сөз",
        "bin.name": "Аты",
        "bin.login_btn": "Кіру",
        "bin.register_btn": "Тіркелу",
        "bin.welcome": "Қош келдіңіз, ",
        "bin.no_account": "Аккаунтыңыз жоқ па?",
        "bin.has_account": "Аккаунтыңыз бар ма?",
        "bin.login_required": "Тапсырыс беру үшін жүйеге кіріңіз",
        "cart.title": "Себет",
        "cart.total": "Барлығы: ",
        "cart.order": "Қазір тапсырыс беру",
        "city.astana": "Астана",
        "city.almaty": "Алматы",
        "city.shymkent": "Шымкент",
        "cinema_header": "Кинотеатрлар - ",
        "no_cinemas": "Бұл қалада әзірге біздің кинотеатрлар жоқ.",
        "price_from": "бастап",
        "about.text1": "Kinopark — Қазақстандағы ең ірі кинотеатрлар желісі, көрермендерге заманауи кино көрсету технологияларын, жоғары деңгейдегі қызмет пен жайлы залдарды ұсынады.",
        "about.text2": "Компания IMAX, лазерлік проекторлар, премиум зал форматтарын және билет сатып алуға арналған ыңғайлы цифрлық сервистерді енгізу арқылы кино мәдениетін белсенді дамытуда.",
        "about.text3": "Бүгінгі таңда Kinopark — бұл ондаған кинотеатрлар, күн сайын мыңдаған көрермендер және ойын-сауық индустриясының тұрақты дамуы.",
        "about.stats.cinemas": "Ел бойынша кинотеатрлар",
        "about.stats.halls": "Ең жақсы жабдықталған залдар",
        "about.stats.viewers": "Жыл сайынғы бақытты көрермендер",
        "about.btn.view_cinemas": "Кинотеатрлар тізімін көру"
    }
};

// User Account System (Pseudo-backend)
const users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function registerUser(name, email, password) {
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Email already exists" };
    }
    const newUser = { name, email, password, history: [] };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Auto login
    currentUser = newUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    return { success: true };
}

function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem("currentUser");
    
    // Check where we are to determine correct path to bin.html
    const isPagesDir = window.location.pathname.includes("/pages/");
    const target = isPagesDir ? "bin.html" : "pages/bin.html";
    window.location.href = target;
}

// Ensure global access for bin.html auto-render if needed, 
// but we will move main logic here entirely.
window.handleLogin = function(e) {
    if(e) e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;
    
    const res = loginUser(email, pass);
    if (res.success) {
        window.location.href = "profile.html";
    } else {
        const err = document.getElementById('login-error');
        if(err) {
            err.textContent = res.message;
            err.style.display = 'block';
        }
    }
}

window.handleRegister = function(e) {
    if(e) e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-password').value;
    
    const res = registerUser(name, email, pass);
    if (res.success) {
        window.location.href = "profile.html";
    } else {
        const err = document.getElementById('reg-error');
        if(err) {
            err.textContent = res.message;
            err.style.display = 'block';
        }
    }
}

// Bin Page Renderer (Moved from inline script)
function renderAuthPage() {
    const authContainer = document.getElementById('auth-section');
    if(!authContainer) return;

    // Check strict redirect if logged in
    if (currentUser) {
        window.location.href = "profile.html";
        return;
    }
    
    // Default to Login View
    renderLoginView(authContainer);
}

function renderLoginView(container) {
    container.innerHTML = `
        <div class="auth-forms">
            <h2 data-i18n="bin.login">Вход</h2>
            <div class="error-msg" id="login-error"></div>
            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label data-i18n="bin.email">Email</label>
                    <input type="email" id="login-email" required>
                </div>
                <div class="form-group">
                    <label data-i18n="bin.password">Пароль</label>
                    <input type="password" id="login-password" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%" data-i18n="bin.login_btn">Войти</button>
            </form>
            <div class="switch-form">
                <span data-i18n="bin.no_account">Нет аккаунта?</span> <a id="go-register" style="cursor:pointer; text-decoration:underline; color:#ff7a00;" data-i18n="bin.register">Зарегистрироваться</a>
            </div>
        </div>
    `;
    updateUI();
    document.getElementById('go-register').onclick = () => renderRegisterView(container);
}

function renderRegisterView(container) {
    container.innerHTML = `
        <div class="auth-forms">
            <h2 data-i18n="bin.register">Регистрация</h2>
            <div class="error-msg" id="reg-error"></div>
            <form onsubmit="handleRegister(event)">
                <div class="form-group">
                    <label data-i18n="bin.name">Имя</label>
                    <input type="text" id="reg-name" required>
                </div>
                <div class="form-group">
                    <label data-i18n="bin.email">Email</label>
                    <input type="email" id="reg-email" required>
                </div>
                <div class="form-group">
                    <label data-i18n="bin.password">Пароль</label>
                    <input type="password" id="reg-password" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%" data-i18n="bin.register_btn">Зарегистрироваться</button>
            </form>
            <div class="switch-form">
                <span data-i18n="bin.has_account">Уже есть аккаунт?</span> <a id="go-login" style="cursor:pointer; text-decoration:underline; color:#ff7a00;" data-i18n="bin.login">Войти</a>
            </div>
        </div>
    `;
    updateUI();
    document.getElementById('go-login').onclick = () => renderLoginView(container);
}

// Set initial state from LocalStorage IMMEDIATELY
// This runs once script is loaded to ensure variables are set
if(!localStorage.getItem("currentCity")) localStorage.setItem("currentCity", "Astana");
if(!localStorage.getItem("currentLang")) localStorage.setItem("currentLang", "ru");

// Profile Page Renderer
function renderProfilePage() {
    const container = document.getElementById('profile-section');
    if(!container) return;

    if (!currentUser) {
        // Find correct path to bin.html
        const isPagesDir = window.location.pathname.includes("/pages/");
        const target = isPagesDir ? "bin.html" : "pages/bin.html";
        window.location.href = target;
        return;
    }
    
    const t = translations[currentLang] || translations['ru'];

    container.innerHTML = `
        <div class="profile-header">
            <h1 data-i18n="bin.title">${t["bin.title"] || "Личный кабинет"}</h1>
            <p class="welcome-msg">
                <span data-i18n="bin.welcome">${t["bin.welcome"] || "Добро пожаловать, "}</span> 
                <strong>${currentUser.name}</strong>!
            </p>
        </div>
        
        <div class="profile-details">
            <p><span data-i18n="bin.name">${t["bin.name"] || "Имя"}</span>: <span>${currentUser.name}</span></p>
            <p><span data-i18n="bin.email">${t["bin.email"] || "Email"}</span>: <span>${currentUser.email}</span></p>
        </div>
        
        <button class="btn-logout" onclick="window.authSystem.logoutUser()" data-i18n="bin.logout">${t["bin.logout"] || "Выйти"}</button>
    `;
}


// статус города и языка
let currentCity = localStorage.getItem("currentCity") || "Astana";
let currentLang = localStorage.getItem("currentLang") || "ru";

function saveState() {
    localStorage.setItem("currentCity", currentCity);
    localStorage.setItem("currentLang", currentLang);
    updateUI();
}

function createCard(film) {
  const card = document.createElement("div");
  card.className = "card";
  
  // Get price for current city
  const price = film.prices[currentCity] || film.prices["Astana"]; // Fallback
  const t = translations[currentLang] || translations['ru'];

  card.dataset.name = film.title;
  card.dataset.price = price;

  // Fix image path relative to current page location if deeper structure used
  // But currently all images in /imgs so relative path works if base is consistent or we resolve logic
  // Since we use ./imgs/ in data, let's keep it. 
  // NOTE: If script runs on pages/*.html, ./imgs relative to page is ../imgs.
  // Simple fix: calculate correct path prefix
  const isPagesDir = window.location.pathname.includes("/pages/");
  const imgPath = isPagesDir ? `.${film.image}` : film.image;

  card.innerHTML = `
    <img src="${imgPath}" alt="${film.title}" class="cardImage">
    <h3 class="cardTitle">${film.title}</h3>
    <p class="cardDesc">${film.description}</p>

    <div class="cardPrices">
      <div class="priceNormal add-to-cart">
        ${t['price_from'] || 'от'} ${price} ₸
      </div>
    </div>
  `;

  return card;
}


// Global click listener for Cart and Dynamic elements
document.addEventListener("click", function(e) {
  // Add to cart
  if (e.target.classList.contains("add-to-cart") || e.target.closest(".add-to-cart")) {
    const card = e.target.closest(".card");
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price);

    if (!cartData[name]) {
      cartData[name] = { qty: 1, price };
    } else {
      cartData[name].qty++;
    }

    const cartEl = document.getElementById("cart");
    if(cartEl) cartEl.classList.add("active");
    renderCart();
  }
  
  // Close cart
  if (e.target.classList.contains("close-cart") || e.target.closest(".close-cart")) {
      const cartEl = document.getElementById("cart");
      if(cartEl) cartEl.classList.remove("active");
  }

  // Cart Qty Change
  if (e.target.dataset.action === "inc-qty") {
      changeQty(e.target.dataset.name, 1);
  }
  if (e.target.dataset.action === "dec-qty") {
      changeQty(e.target.dataset.name, -1);
  }

  // Order button
  if (e.target.classList.contains("order-btn")) {
      if (!currentUser) {
          const t = translations[currentLang] || translations['ru'];
          alert(t["bin.login_required"] || "Please login first!");
          
           // Redirect to bin.html
           const isPagesDir = window.location.pathname.includes("/pages/");
           window.location.href = isPagesDir ? "bin.html" : "pages/bin.html"; 
           
      } else {
           alert("Order placed successfully! (simulation)");
           cartData = {};
           renderCart();
      }
  }

  // Side Menu Toggle
  if (e.target.closest(".menu")) {
      const sideMenu = document.querySelector(".side-menu");
      const overlay = document.querySelector(".menu-overlay");
      if(sideMenu) sideMenu.classList.add("active");
      if(overlay) overlay.classList.add("active");
  }

  // Close Side Menu
  if (e.target.classList.contains("side-menu-close") || e.target.classList.contains("menu-overlay")) {
      const sideMenu = document.querySelector(".side-menu");
      const overlay = document.querySelector(".menu-overlay");
      if(sideMenu) sideMenu.classList.remove("active");
      if(overlay) overlay.classList.remove("active");
  }

  // City Dropdown Toggle
  if (e.target.closest(".city_change")) {
      const dropdown = document.querySelector(".city-dropdown");
      if (dropdown) {
          // If clicking an option inside
          if(e.target.classList.contains("city-option")) {
              currentCity = e.target.dataset.city;
              saveState();
              dropdown.classList.remove("active");
          } else {
              // Toggle open
              dropdown.classList.toggle("active");
          }
      }
  } else {
      // Close dropdown if clicked outside
      const dropdown = document.querySelector(".city-dropdown");
      if(dropdown) dropdown.classList.remove("active");
  }

});


function updateUI() {
    const cityDisplay = document.querySelector(".city_name");
    const cityDropdown = document.querySelector(".city-dropdown");
    const t = translations[currentLang] || translations['ru'];
    
    // Populate Dropdown first
    if (cityDropdown) {
        cityDropdown.innerHTML = "";
        cities.forEach(city => {
            const div = document.createElement("div");
            div.className = "city-option";
            div.dataset.city = city;
            div.textContent = t[`city.${city.toLowerCase()}`] || city;
            cityDropdown.appendChild(div);
        });
    }

    if (cityDisplay) {
        const cityKey = `city.${currentCity.toLowerCase()}`;
        // Explicitly set textContent to override any previous state
        cityDisplay.textContent = t[cityKey] || currentCity;
        // Verify we aren't using data-i18n on this element in HTML, 
        // effectively managing it manually here.
        cityDisplay.removeAttribute('data-i18n'); 
    }

    const langDisplay = document.querySelector(".lang_change");
    if (langDisplay) {
        // Update the text in .current-lang span
        const currentLangSpan = langDisplay.querySelector(".current-lang");
        let langText = 'Rus';
        if(currentLang === 'en') langText = 'Eng';
        if(currentLang === 'kk') langText = 'Kaz';
        
        if(currentLangSpan) currentLangSpan.textContent = langText;
    }
    
    applyTranslations();
    
    // Refresh content that depends on city/lang
    if (document.querySelector(".contacts-container")) {
        renderCinemas();
    }
    
    // RENDER CARDS LOGIC WITH SEARCH FILTERS
    const searchInput = document.querySelector(".search");
    const filterSelect = document.querySelector(".search-filter");
    
    let query = searchInput ? searchInput.value.toLowerCase() : "";
    let category = filterSelect ? filterSelect.value : "all";
    
    const filteredFilms = films.filter(film => {
        const matchesQuery = film.title.toLowerCase().includes(query);
        const matchesCategory = category === "all" || film.category === category;
        return matchesQuery && matchesCategory;
    });

    // Clear previous renders to prevent visual bugs if multiple exist
    const c1 = document.getElementById("cards-container");
    const c2 = document.getElementById("cards-container2");
    const cCatalog = document.getElementById("catalog-container");

    if(c1) renderCards(filteredFilms.filter(f => f.category === "popular"), "cards-container");
    if(c2) renderCards(filteredFilms.filter(f => f.category === "recommended"), "cards-container2");
    if(cCatalog) renderCards(filteredFilms, "catalog-container");

    renderCart();
    updateAuthUI();
    
    // Render Profile if on profile page
    if(document.getElementById("profile-section")) {
        renderProfilePage();
    }
}

function updateAuthUI() {
    // Update the "Personal Cabinet" link depending on AUTH state
    // We want it to go to profile.html if logged in, bin.html if not.
    // However, the files are static. 
    // Easier approach: The clicked link is handled by valid page loads.
    
    // We can update the text maybe? 
    // actually, let's leave the link to bin.html by default in HTML.
    // bin.html redirects to profile if logged in.
    // profile.html redirects to bin if not logged in.
    // So the HREF can stay "bin.html" (or "pages/bin.html").
    
    // But we might want to update the Navbar Text from "Personal Cabinet" to "Profile" or Name?
    // User didn't explicitly ask for this, but "Cabinet" is fine.
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
        container.appendChild(list);
    }
    
    const filteredCinemas = cinemas.filter(c => c.city === currentCity);
    const t = translations[currentLang];
    
    let html = `
        <div class="cinemas-header" style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
            <br>
            <h3>${t["cinema_header"]}${currentCity}</h3>
        </div>
    `;
    
    if (filteredCinemas.length === 0) {
        html += `<p>${t["no_cinemas"]}</p>`;
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

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = "";

  data.forEach(function (film) {
    container.appendChild(createCard(film));
  });
}

document.addEventListener("DOMContentLoaded", () => {
    updateUI();

    // Check if we are on Auth Page
    if(document.getElementById("auth-section")) {
        renderAuthPage();
    }

    // Search & Filter Event Listeners
    const searchInput = document.querySelector(".search");
    const filterSelect = document.querySelector(".search-filter");
    
    if (searchInput) {
        searchInput.addEventListener("input", updateUI);
    }
    if (filterSelect) {
        filterSelect.addEventListener("change", updateUI);
    }
    
    // Global Click for Language Dropdown
    document.addEventListener("click", (e) => {
       if (e.target.closest(".lang_change")) {
            const dropdown = document.querySelector(".lang-dropdown");
            if (dropdown) {
                if(e.target.classList.contains("lang-option")) {
                    currentLang = e.target.dataset.lang;
                    saveState();
                    dropdown.classList.remove("active");
                } else {
                    dropdown.classList.toggle("active");
                }
            }
       } else {
           const dropdown = document.querySelector(".lang-dropdown");
           if(dropdown) dropdown.classList.remove("active");
       }
    });

});

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

    formMessage.style.display = "none";
    formMessage.className = "form-message";

    let errors = [];
    if (name === "") errors.push("Name required"); 
    if (email === "" || !email.includes("@")) errors.push("Valid email required");
    if (message === "") errors.push("Message required");
    if (!agreement) errors.push("Agreement required");

    if (errors.length > 0) {
      formMessage.innerHTML = errors.join("<br>"); 
      formMessage.classList.add("error");
      formMessage.style.display = "block";
    } else {
      alert("Message sent!");
      formMessage.textContent = "Success!";
      formMessage.classList.add("success");
      formMessage.style.display = "block";
      contactForm.reset();
    }
  });
}

// Page Transitions (removed fade-out for simplicity, keeping just logic)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        if (e.ctrlKey || e.metaKey) return;
        if (this.href === window.location.href) return;
        
        // Let standard navigation happen for simplicity and to avoid path issues
        // e.preventDefault();
    });
});


// Cart Logic
let cartData = {};

function changeQty(name, delta) {
  if (cartData[name]) {
    cartData[name].qty += delta;
    if (cartData[name].qty <= 0) delete cartData[name];
    renderCart();
  }
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  
  if(!cartItems || !totalPrice) return;
  
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
        <button data-action="dec-qty" data-name="${name}">-</button>
        <span>${item.qty}</span>
        <button data-action="inc-qty" data-name="${name}">+</button>
      </div>
    `;
    cartItems.appendChild(div);
  }

  const t = translations[currentLang] || translations['ru'];
  totalPrice.innerText = `${t["cart.total"]} ${total} ₸`; 
}
