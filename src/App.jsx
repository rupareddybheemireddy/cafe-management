import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Offers from "./components/offers";
import About from "./components/about";
import Gallery from "./components/gallery";
import Reservation from "./components/reservation";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(indexToRemove) {
    setCart(
      cart.filter((_, index) => index !== indexToRemove)
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Hero />

      <Menu addToCart={addToCart} />

      {/* Cart Section */}
      <section className="cart-section" id="cart">
        <div className="section-heading">
          <p>YOUR ORDER</p>
          <h2>Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Add something delicious!
          </p>
        ) : (
          <div className="cart-container">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-total">
              <h3>Total: ₹{total}</h3>
            </div>
          </div>
        )}
      </section>

      <Offers />

      <About />

      <Gallery />

      <Reservation />

      <Contact />

      <Footer />
    </>
  );
}

export default App;