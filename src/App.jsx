import { Routes, Route } from "react-router-dom";
import DiseaseSelect from "./pages/DiseaseSelect";
import CuisineSelect from "./pages/CuisineSelect";
import OptionSelect from "./pages/OptionSelect";
import Recipes from "./pages/Recipes";
import IngredientSwaps from "./pages/IngredientSwaps";
import GeneralTips from "./pages/GeneralTips";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DiseaseSelect />} />
      <Route path="/cuisine" element={<CuisineSelect />} />
      <Route path="/options" element={<OptionSelect />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/swaps" element={<IngredientSwaps />} />
      <Route path="/tips" element={<GeneralTips />} />
    </Routes>
  );
}

export default App;
