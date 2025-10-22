# Patient Plate

**Patient Plate** is a web-based tool that helps healthcare providers offer culturally sensitive dietary recommendations for patients with chronic diseases. Users can select a condition, choose a cuisine, and explore recipes, ingredient swaps, and general nutrition tips tailored to both.

## 🖥️ Live Site

🔗 [https://patient-plate.github.io](https://patient-plate.github.io)

---

## ✈️ Overview

1. **Select a Chronic Condition**
2. **Choose a Cuisine**
3. **Pick a Resource Type**
   - Recipes
   - Ingredient Swaps
   - General Tips
4. **Explore tailored dietary recommendations**

---

## 🔧 Tech Stack

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
./build.sh
```

This outputs a static version of the app into the `dist/` folder,
copies the contents of `dist/` into the repository root (e.g., `index.html`,
`assets/`, and `favicon.ico`), and removes the `dist/` folder.

Once the changes are pushed, the new site is automatically deployed.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🗿 Credits

Built by wiltsai and contributors.  
Special thanks to those working to bridge culture and care through food and equity.
