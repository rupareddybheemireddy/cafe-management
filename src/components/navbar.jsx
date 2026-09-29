function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        ☕ Café Bliss
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#offers">Offers</a>
        <a href="#gallery">Gallery</a>
        <a href="#reservation">Reservation</a>
        <a href="#contact">Contact</a>

        <a href="#cart" className="cart">
          🛒 {cartCount}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;