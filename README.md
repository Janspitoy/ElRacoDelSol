# 🌞 **El Racó del Sol**  
**A modern full-stack portfolio project — restaurant landing page built with React & Django REST Framework.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-000?style=for-the-badge&logo=githubpages&logoColor=white)](https://janspitoy.github.io/ElRacoDelSol/)
[![Backend API](https://img.shields.io/badge/📡_Backend_API-000?style=for-the-badge&logo=django&logoColor=white)](https://elracodelsol.onrender.com/api/)
[![Made with React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Made with Django](https://img.shields.io/badge/Backend-Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)

</div>

---

## 🍽️ Overview
**El Racó del Sol** is a full-stack **portfolio project** that represents a Mediterranean restaurant based in Barcelona.  
It combines a **stylish dark-gold design** with **dynamic content** powered by a Django REST API.  

The website includes a menu with categories, a Lightbox gallery, a horizontal-scrolling team section, and an integrated contact section with Google Maps.  
Built to showcase **modern full-stack development**, responsive UI, and clean REST API architecture.

---

## ✨ Features
- 🖥️ **Fully responsive** landing page (desktop & mobile)
- ⚙️ **Django REST API** backend with dynamic content
- 🍛 **Dynamic menu** with categories and dishes
- 👨‍🍳 **Team section** with horizontal scroll
- 🖼️ **Lightbox gallery** with auto-resized images (612×560)
- 📍 **Google Maps** integration in contact section
- 🎨 **Dark-gold Mediterranean theme** with elegant typography
- 🔐 **Secure API access** — write actions require authentication

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite), Axios, Bootstrap 5, Lightbox |
| **Backend** | Django, Django REST Framework |
| **Database** | SQLite |
| **Hosting** | GitHub Pages (Frontend) + Render (Backend) |

---

## 🧠 Purpose
This project was built as part of my **developer portfolio** to demonstrate:
- Full-stack integration between **React + Django REST Framework**
- Building **API-driven UIs** with Axios and REST endpoints
- Designing **responsive, modern web interfaces**
- Deploying complete **frontend + backend** environments

---

## ⚡ Installation & Setup

### 🔹 Clone the repository
```bash
git clone https://github.com/Janspitoy/ElRacoDelSol.git
````

---

### 🔸 Backend Setup (Django)

```bash
cd el_raco_del_sol/el_raco_del_sol_backend

# Create virtual environment
python -m venv .venv
source .venv/bin/activate   # or .venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

Backend will be running at 👉 **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

### 🔸 Frontend Setup (React + Vite)

```bash
cd ../el_raco_del_sol_frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will be available at 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧩 Admin Panel

Django Admin Panel lets you manage:

* Categories
* Dishes
* Team Members
* Gallery Images *(auto-cropped to 612×560)*

Access:
➡️ **/admin**

---

## 🧰 API Endpoints

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| `GET`  | `/api/categories/` | Get all categories            |
| `GET`  | `/api/dishes/`     | Get all dishes                |
| `GET`  | `/api/team/`       | Get team members              |
| `GET`  | `/api/gallery/`    | Get gallery images            |
| `POST` | `/api/...`         | Requires admin authentication |

---

## 🧱 Folder Structure

```
el_raco_del_sol/
├── el_raco_del_sol_backend/
│   ├── menu/
│   ├── el_raco_del_sol_backend/
│   ├── db.sqlite3
│   └── manage.py
│
└── el_raco_del_sol_frontend/
    ├── src/
    │   ├── components/
    │   ├── styles/
    │   ├── assets/
    │   └── App.jsx
    ├── package.json
    └── vite.config.js
```

---

## 📸 Preview

![El Racó del Sol Preview](https://raw.githubusercontent.com/Janspitoy/ElRacoDelSol/refs/heads/master/Screenshot_6-11-2025_04549_localhost.jpeg)

---

## 🧠 Future Improvements

* 🗣️ Add multilingual support (EN / ES / RU / UA)
* 🔎 Add dish search and filters
* 📅 Online reservations with authentication
* ⚡ Performance optimization & SEO metadata

---

## 📬 Contact

**👤 Ivan (Janspitoy)**
Full-stack developer passionate about design and clean architecture.
📍 Based in Spain 🇪🇸
🔗 [GitHub Profile](https://github.com/Janspitoy)

---

## 🪪 License

This project is created for **educational and portfolio purposes**.
You are free to explore, fork, and learn from it.

---

> 🌴 *"El sabor del Mediterráneo bajo el sol de Barcelona"*
> *The taste of the Mediterranean under the Barcelona sun.*

```

---

💡 Этот вариант:
- полностью **валидный markdown** (GitHub корректно отобразит `<div align="center">` и таблицы);
- содержит все инструкции;
- оформлен как у профессиональных full-stack демо;
- готов к публикации без правок.  

Хочешь, я добавлю наверх красивый **баннер с названием проекта и фоном ресторана** (например, `banner.png`), чтобы README выглядел “premium”?
```
