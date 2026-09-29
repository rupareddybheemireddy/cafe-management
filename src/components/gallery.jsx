function Gallery() {
  const images = [
    "/images/cafe.jpg",
    "/images/coffee.jpg",
    "/images/burger.jpg",
    "/images/pizza.jpg",
    "/images/pasta.jpg",
    "/images/dessert.jpg"
  ];

  return (
    <section className="gallery" id="gallery">

      <div className="section-heading">
        <p>OUR SPACE</p>
        <h2>Gallery</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cafe ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Gallery;