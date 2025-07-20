# Patient Plate

**Culturally Sensitive Dietary Guidance for Chronic Disease Management**

Patient Plate is a lightweight, React-based web application designed for healthcare providers. It offers culturally tailored dietary tips to support chronic disease management, with a focus on accessibility, simplicity, and clinical relevance.

🌐 Live site: [https://patient-plate.github.io](https://patient-plate.github.io)

---

## 🩺 What It Does

Patient Plate guides providers through a 3-step flow:

1. **Select a chronic condition** (e.g. diabetes, hypertension)
2. **Choose a cuisine** (e.g. Korean, Mexican, Chinese)
3. **Receive evidence-based dietary tips** tailored to both

Designed with cultural awareness, social determinants of health, and real-world clinic time constraints in mind.

---

## 🧱 Tech Stack

- ⚛️ React (with Vite)
- 🎨 Vanilla CSS
- 🗂 GitHub Pages for static hosting
- 🧠 Simple JSON-style tip database

---

## 🚀 Getting Started Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/patient-plate/patient-plate.github.io.git
   cd patient-plate.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Confirm the index.html only references `/src/main.jsx`, and remove any lines with referencing the `assets/` directory.

5. Open [http://localhost:5173](http://localhost:5173) to view in your browser.

---

## 🏗 Build for Production

```bash
npm run build
```

This outputs a static version of the app into the `dist/` folder.
Copy the contents of `dist/` into the repository root (e.g., `index.html`,
`assets/`, and `favicon.ico`). The `dist/` folder itself should **not** be
committed.

---

## 📁 Project Structure

```
patient-plate.github.io/
├── public/               # Static assets (e.g. favicon)
├── src/
│   ├── components/       # Reusable UI elements
│   ├── data/             # Dietary tips database (tips.js)
│   ├── pages/            # Route-level pages (Home, Cuisine, Tips)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React DOM entrypoint
│   └── App.css           # Global styles
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── .gitignore
```

---

## 💻 Deployment

This is a **GitHub Pages user site**, deployed directly from the `main` branch.

To push updates:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

GitHub will automatically rebuild and serve the latest version at:  
🔗 [https://patient-plate.github.io](https://patient-plate.github.io)

---

## 📝 License

[MIT License](./LICENSE)

---

## 🙏 Credits

Built by wiltsai and contributors.  
Special thanks to those working to bridge culture and care through food and equity.
