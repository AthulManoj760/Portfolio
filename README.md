# Athul Manoj | Personal Portfolio 🚀

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A sleek, modern, and highly modular personal portfolio website showcasing my skills, projects, certifications, and experience. Designed with a clean code architecture, this portfolio functions as a Single Page Application (SPA) but is uniquely strictly built natively using standard HTML, CSS, and modular Vanilla JavaScript.

## ✨ Features

- **Dark / Light Mode Architecture**: Fully responsive theme engine using native CSS variables providing high contrast visibility in both modes.
- **Modular HTML Components**: Built natively with no heavyweight frameworks, the website slices deep structures (Hero, About, Projects, Skills) into individual `components/*.html` files for incredible developer maintainability, fetched concurrently on page generation.
- **Dynamic Interactivity**: Uses the lightweight IntersectionObserver API for performant scroll-binded animations and navigation highlight trackers.
- **Premium Typography**: Handpicked professional typeface stack featuring `Inter` for hyper-legible body-copy, `Outfit` for display headings, and `Roboto Mono` for technical blocks.
- **Resume Integration**: Embedded direct access endpoint to smoothly download my latest technical resume format natively.

## 📁 Repository Structure

```text
├── assets/
│   └── Athul_Manoj_Resume.pdf  # Downloadable PDF Resume
│   └── profile.jpg             # About Avatar photo
├── components/                 # Extracted HTML Modules
│   ├── about.html
│   ├── certifications.html
│   ├── contact.html
│   ├── hero.html
│   ├── projects.html
│   └── skills.html
├── css/
│   └── styles.css              # Global styling variables and rulesets (350+ lines)
├── js/
│   └── scripts.js              # State logic, HTML injection hooks, and DOM mounting
└── index.html                  # The root application shell serving as the entry point
```

## 🛠️ Local Development & Quick Start

Because this application dynamically renders its layout by securely `fetch()`-ing separate HTML component blocks, modern browser CORS policies require this code to be executed over an HTTP server protocol, not a raw file path.

**To run this locally:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AthulManoj760/Portfolio.git
   cd Portfolio
   ```

2. **Spin up a local Web Server** using any of these popular methods:
   - **VS Code Extension**: Install **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**, open `index.html`, and click `Go Live`.
   - **Using Python 3**:
     ```bash
     python -m http.server
     ```
   - **Using Node.js**:
     ```bash
     npx serve
     ```

3. Visit your `localhost` URL indicated in your terminal and browse the website!

## 📬 Contact me

Feel free to reach out if you're looking for a developer, have a question, or just want to connect!

- **Email:** [athulmanoj760@gmail.com](mailto:athulmanoj760@gmail.com)
- **LinkedIn:** [Athul Manoj T P](https://www.linkedin.com/in/athul-manoj-t-p-3a66522b9/)
- **GitHub:** [@AthulManoj](https://github.com/AthulManoj760)

---
<p align="center">Built with precision. Engineering solutions one line at a time.</p>