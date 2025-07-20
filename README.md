# 🥗 Patient Plate

**Patient Plate** is a web-based tool that helps healthcare providers offer culturally sensitive dietary recommendations for patients with chronic diseases. Users can select a condition, choose a cuisine, and explore recipes, ingredient swaps, and general nutrition tips tailored to both.

## 🚀 Live Site

🔗 [https://patient-plate.github.io](https://patient-plate.github.io)

---

## 📸 Overview

1. **Select a Chronic Condition**
2. **Choose a Cuisine**
3. **Pick a Resource Type**
   - Recipes
   - Ingredient Swaps
   - General Tips
4. **Explore tailored dietary recommendations**

---

## 🛠️ Tech Stack

- **React** (Vite)
- **React Router**
- **CSS Modules / Flexbox**
- **GitHub Pages** for deployment

---

## 📂 Project Structure

```
patient-plate.github.io/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── ButtonCard.jsx
│   ├── data/
│   │   ├── tips.js
│   │   ├── swaps.js
│   │   └── recipes.js
│   ├── pages/
│   │   ├── CuisineSelect.jsx
│   │   ├── DiseaseSelect.jsx
│   │   ├── OptionSelect.jsx
│   │   ├── Recipes.jsx
│   │   ├── IngredientSwaps.jsx
│   │   └── GeneralTips.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── README.md
├── package.json
└── package-lock.json
```

---

## 🧑‍💻 Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🚢 Deployment to GitHub Pages

### 1. Ensure `vite.config.js` includes:

```js
export default defineConfig({
  base: "./",
  plugins: [react()]
});
```

### 2. Build the app

```bash
npm run build
```

### 3. Commit and push to GitHub

Make sure all changes (including the `/dist` folder, if deploying manually) are committed to your `main` branch.

### 4. In your GitHub repository settings:

- Go to **Pages**
- Set:
  - **Source**: `main`
  - **Folder**: `/ (root)` (for user site like `patient-plate.github.io`)

GitHub will serve your site from:  
📍 [https://patient-plate.github.io](https://patient-plate.github.io)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Credits

Built by wiltsai and contributors.  
Special thanks to those working to bridge culture and care through food and equity.
