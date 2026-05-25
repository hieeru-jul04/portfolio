# 💻 Personal Portfolio - Nguyen Ngoc Hieu

Welcome to the repository of my personal portfolio website! This project serves as a modern digital resume, showcasing my background, skills, experiences, and the projects I have passionately built. 

Designed with a premium dark mode aesthetic, it integrates smooth micro-interactions, floating visual elements, and dynamic animations to provide an optimal and immersive user experience.

---

## 🌟 Key Features

- **🎨 Premium Dark Aesthetics**: A tailored HSL deep dark palette coupled with glow backgrounds, subtle gradients, and sleek glassmorphism effects.
- **📱 Fully Responsive**: Seamlessly optimized for all device sizes, including mobile phones, tablets, and desktop monitors.
- **✨ Dynamic Micro-Animations**:
  - Auto-typing effect in the hero introduction.
  - Floating tech badges surrounding the main illustration to create layered depth.
  - Smooth interactive transitions on hover (scale, border-color, glow).
- **📂 Timeline-based Journey**: An intuitive education and experience chronological roadmap.
- **✉️ Seamless Contact Form**: An integrated, fully interactive contact form with active submission states (`Sending` & `Sent`).

---

## 🛠️ Tech Stack

Built with cutting-edge front-end technologies for ultra-fast performance and clean development workflows:

- **Core**: [React 19](https://react.dev/) & [Vite](https://vite.dev/) (For ultra-fast Hot Module Replacement and bundled builds)
- **Styling**: [Tailwind CSS v4.0](https://tailwindcss.com/) (The next-generation utility-first CSS framework with blazing fast performance)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (Providing rich, crisp vector-based icon packs)
- **Typography**: Inter & Outfit (Google Fonts tailored for professional reading)

---

## 📁 Project Structure

The project has a highly modular architecture, separating sections and UI components to ensure clean maintenance and scalability:

```text
portfolio/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Images and illustration assets
│   ├── components/
│   │   ├── sections/       # Core layout sections of the portfolio
│   │   │   ├── About.jsx       # Biography and quick personal metrics
│   │   │   ├── Contact.jsx     # Contact info & social connect form
│   │   │   ├── Experience.jsx  # Education & employment timeline
│   │   │   ├── Projects.jsx    # Showcasing highlight projects
│   │   │   ├── Section.jsx     # Hero Intro section with floating badges
│   │   │   ├── Skills.jsx      # Technical skills listing
│   │   │   └── shared.css      # Shared section-specific animations & styles
│   │   ├── shared/         # Common layout structures
│   │   │   ├── Header.jsx      # Navigation bar (Navbar)
│   │   │   └── Footer.jsx      # Copyright footer & links
│   │   └── ui/             # Atomic/Re-usable UI components
│   │       └── Logo.jsx        # Personalized custom signature logo
│   ├── App.jsx             # Root layout and section assembler
│   ├── App.css             # Main styling, typography, and page structure
│   ├── index.css           # Tailwind CSS v4 directives
│   └── main.jsx            # Application entry point
├── vite.config.js          # Vite configuration
├── package.json            # Node project metadata and dependencies
└── README.md               # Project documentation (this file)
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS version is recommended).

### 1. Clone the repository
```bash
git clone https://github.com/hieeru-jul04/portfolio.git
cd portfolio
```

### 2. Install dependencies
Install all the required npm packages listed in `package.json`:
```bash
npm install
```

### 3. Run the Development Server
Launch the local dev environment:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application in action.

### 4. Build for Production
Compress, minify, and optimize the bundle to deploy to hosting environments (like Vercel, Netlify, or GitHub Pages):
```bash
npm run build
```
This command generates static production files in the `/dist` directory.

---

## 🙋‍♂️ About Me - Nguyen Ngoc Hieu

- **Education**: IT Student at **Hanoi University** (Class of 2022 - 2026).
- **Career Goal**: Striving to become a professional **Backend / Fullstack Developer** focused on building clean, high-performance, and scalable web solutions.
- **Notable Experiences**:
  - **Business Analyst Intern** at **Eras Vietnam** (Spring 2026).
  - Taught myself and developed multiple real-world personal web applications (2025 - 2026).
  - Worked part-time as a Sales Assistant at a local furniture store, which helped hone my teamwork and communication skills.

### Highlight Projects Featured in the Portfolio:
1. **E-Commerce Website**: A fullstack shopping website with customer authentication, product catalogs, and Stripe integration (React, Spring Boot, MySQL).
2. **Task Management App**: A project management application featuring user workspaces and real-time socket updates (React, Spring Boot, WebSocket).
3. **Personal Portfolio**: This modern responsive web application (React, Tailwind CSS).

---

## 📞 Get In Touch

Feel free to connect with me if you'd like to collaborate, hire me, or simply discuss web development!

- 📧 **Email**: [nguyenhieu2072004@gmail.com](mailto:nguyenhieu2072004@gmail.com)
- 📞 **Phone**: +84 965 947 378
- 🏢 **Location**: Hanoi, Vietnam
- 💼 **LinkedIn**: [Nguyen Ngoc Hieu](https://www.linkedin.com/in/hieeru-jul04/?locale=en-US)
- 💻 **GitHub**: [@hieeru-jul04](https://github.com/hieeru-jul04)
- 👥 **Facebook**: [Hieu Nguyen](https://www.facebook.com/hieeru.jul04.work)

---

*Thank you for visiting my portfolio repository! Have a wonderful day!* ✨
