function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />

      <div className="menu-card-content">
        <span className="category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="menu-bottom">
          <strong>₹{item.price}</strong>

          <button onClick={() => addToCart(item)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;