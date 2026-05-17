# MNails — Маникюрная студия

Современный лендинг для маникюрной студии с минималистичным дизайном, плавными анимациями и формой записи. Создан с использованием Vite, SCSS и чистого JavaScript.

## Демо

🌐 [Посмотреть демо](https://nnnekita.github.io/nails-studio-sample/)

## Скриншоты

### Главная страница

[![Hero секция](/Nnnekita/nails-studio-sample/raw/main/screenshots/hero.png)](/Nnnekita/nails-studio-sample/blob/main/screenshots/hero.png)

### Услуги

[![Услуги](/Nnnekita/nails-studio-sample/raw/main/screenshots/services.png)](/Nnnekita/nails-studio-sample/blob/main/screenshots/services.png)

### О студии

[![О студии](/Nnnekita/nails-studio-sample/raw/main/screenshots/about.png)](/Nnnekita/nails-studio-sample/blob/main/screenshots/about.png)

### Форма записи

[![Запись](/Nnnekita/nails-studio-sample/raw/main/screenshots/booking.png)](/Nnnekita/nails-studio-sample/blob/main/screenshots/booking.png)

## Технологии

- **HTML5** — семантическая разметка, a11y-атрибуты
- **SCSS** — переменные, миксины, BEM-нейминг, адаптив
- **JavaScript** — IntersectionObserver, плавный скролл, мобильное меню, форма записи
- **Vite** — сборка, dev-сервер, HMR

## Структура проекта

```
nails-studio-sample/
├── index.html              # Главная страница
├── assets/
│   ├── scss/
│   │   └── style.scss      # Исходные стили
│   └── js/
│       └── main.js         # Интерактивность
├── screenshots/            # Скриншоты для README
├── vite.config.js          # Конфигурация Vite
└── package.json
```

## Секции лендинга

1. **Шапка** — sticky-навигация с blur-эффектом, меняет стиль при скролле
2. **Hero** — полноэкранный блок с заголовком, CTA-кнопками и фактами о студии
3. **Услуги** — 3 карточки: Smart manicure, Gel polish, Nail design с ценами и временем
4. **О студии** — описание подхода, стандарты стерильности, темп работы
5. **Атмосфера** — галерея изображений с hover-эффектами
6. **Форма записи** — выбор времени, имя, телефон, услуга, подтверждение

## Особенности

- 🎨 Минималистичный дизайн с тёплой палитрой
- 📱 Полностью адаптивный дизайн (мобильные, планшеты, десктоп)
- 📝 Форма записи с выбором временного слота
- ✨ Плавные анимации появления секций при скролле
- 🍔 Мобильное меню-бургер с анимацией
- 🖼️ Изображения с hover-эффектами
- ♿ Доступность (aria-атрибуты, семантическая разметка)

## Запуск

```bash
# Установка зависимостей
npm install

# Dev-сервер с hot reload
npm run dev

# Продакшен-сборка
npm run build

# Предпросмотр сборки
npm run preview
```

Или просто откройте `dist/index.html` в браузере.
