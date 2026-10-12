# Hadiuz Zaman — AI/ML Developer Portfolio

An Awwwards-inspired, editorial personal developer portfolio engineered with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

Built specifically for **Hadiuz Zaman**, a Computer Science and Engineering student specializing in **Artificial Intelligence and Machine Learning** at **Dayananda Sagar University** (Graduating in 2028).

---

## 🌟 Key Features

- **Cinematic Editorial Hero**: High-impact staggered typography reveal, live status badge (`Open for Research & Collaborations`), and responsive CTAs.
- **Interactive Neural Geometry Canvas**: Custom HTML5 Canvas simulating synaptic pulse activations, dynamic weights, and mouse-gravity electromagnetic responses.
- **Flagship Project Showcase**: Deep dive into the *AI-Based Energy Consumption Forecasting* project with an interactive **Model Benchmark Explorer** comparing Linear Regression, Decision Trees, and Random Forest architectures.
- **Curated Technical Capabilities**: Verified competencies grouped into Programming, AI/ML, Data Science, Web Development, and Tools with interactive category filters (no fabricated proficiency bars).
- **The Hidden Layer (Terminal Easter Egg)**: Interactive cybernetic developer terminal (`hz@ai-kernel:~$`) accessible via the `SYS_SHELL` navbar button or global hotkey `` ` `` / `~`. Includes commands like `help`, `about`, `skills`, `projects`, `contact`, `matrix`, and `secret` (confetti celebration).
- **Tactile UX Details**: Custom trailing cursor with interactive element snapping, film grain texture overlay, glassmorphism, and live Bengaluru (IST) clock.
- **Accessible & Performant**: Full support for `prefers-reduced-motion`, semantic HTML structure, and clean 100% build output.

---

## 🛠️ Tech Stack

- **Core**: React 19, Vite 8
- **Styling**: Tailwind CSS v4, Modern Vanilla CSS Design Tokens
- **Animations**: Framer Motion, HTML5 2D Canvas Engine
- **Icons & Effects**: Lucide React, Canvas Confetti
- **Typography**: *Syne*, *Space Grotesk*, *Outfit*, and *JetBrains Mono* (via Google Fonts)

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

### 2. Install Dependencies
```bash
npm install
```

*(On Windows PowerShell with strict script execution policies, run `npm.cmd install`)*

### 3. Run Development Server
```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ⚙️ How to Personalize & Update Content

All personal data, links, projects, skills, and academic milestones are centralized in a single configuration file:

📁 **`src/data/portfolioData.js`**

### Modifying Personal Info & Social Links
In `portfolioData.js`:
```javascript
export const personalInfo = {
  name: "Hadiuz Zaman",
  monogram: "HZ",
  title: "AI/ML Developer in Progress",
  tagline: "Building Intelligent Things.",
  email: "hadiuzzaman.dev@gmail.com", // Set your preferred email
  github: "https://github.com/HadiuzZaman122", // Your GitHub
  linkedin: "https://www.linkedin.com/in/hadiuz-zaman/", // Your LinkedIn
  resumeUrl: "#", // Add link to your PDF resume here
  graduationYear: "2028",
  institution: "Dayananda Sagar University",
};
```

### Adding New Projects
In `portfolioData.js`, add a new object to the `projectsData` array:
```javascript
{
  id: "your-project-id",
  title: "Project Title",
  category: "Machine Learning / Computer Vision",
  featured: false,
  description: "Brief summary of problem statement, models used, and findings.",
  tags: ["Python", "PyTorch", "OpenCV"],
  githubUrl: "https://github.com/HadiuzZaman122/your-repo-name",
  liveUrl: null, // or live deployment URL
}
```

### Updating Skills
In `portfolioData.js`, modify the `skillsData.categories` array to add or update your verified technologies and competency notes.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended & Easiest)
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository (`Portfolio`).
4. Framework Preset: **Vite** (auto-detected).
5. Click **Deploy**. Vercel will build and serve your site globally on a custom `.vercel.app` URL.

### Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, add `base`:
   ```javascript
   export default defineConfig({
     base: '/Portfolio/', // replace with your repo name
     plugins: [tailwindcss(), react()],
   })
   ```
3. In `package.json`, add deploy script:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📁 Project Structure

```
d:/Portfolio/
├── public/
│   └── favicon.svg               # Custom neural monogram SVG favicon
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx             # Narrative philosophy & 4 core pillars
│   │   ├── Contact.jsx           # Email copy toast & message dispatch
│   │   ├── CustomCursor.jsx      # Magnetic trailing custom cursor
│   │   ├── Footer.jsx            # Live Bengaluru clock & back-to-top
│   │   ├── Hero.jsx              # Monolith name reveal & status indicator
│   │   ├── HiddenLayerTerminal.jsx # Interactive Easter egg developer terminal
│   │   ├── Icons.jsx             # Dedicated SVG brand components
│   │   ├── Journey.jsx           # Academic progression timeline
│   │   ├── Navbar.jsx            # Glass header & mobile navigation
│   │   ├── NeuralCanvas.jsx      # Canvas neural network simulation
│   │   ├── Projects.jsx          # Featured ML project & model comparator
│   │   └── Skills.jsx            # Categorized competency showcase
│   ├── data/
│   │   └── portfolioData.js      # Central data configuration
│   ├── App.jsx                   # Root application assembly
│   ├── index.css                 # Master design system & Tailwind styling
│   └── main.jsx                  # React entrypoint
├── index.html                    # SEO metadata & Google Fonts
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 License
MIT License. Created by [Hadiuz Zaman](https://github.com/HadiuzZaman122).
