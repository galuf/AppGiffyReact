import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaulCategories = [] }) => {
  //const [categories, setCategories] = useState(["Pandas"]);
  const [categories, setCategories] = useState(defaulCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((categoria) => (
          <GifGrid key={categoria} category={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
