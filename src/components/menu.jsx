import { useState } from "react";
import menuData from "../data/menudata";
import MenuCard from "./menucard";

function Menu({ addToCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Coffee",
    "Pizza",
    "Burger",
    "Pasta",
    "Dessert"
  ];

  const filteredItems = menuData.filter((item) => {
    const categoryMatch =
      category === "All" || item.category === category;

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <p>OUR MENU</p>
        <h2>Fresh & Delicious</h2>
      </div>

      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;