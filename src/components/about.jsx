function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="/images/cafe.jpg"
          alt="Our Cafe"
        />
      </div>

      <div className="about-content">
        <p className="small-title">
          ABOUT US
        </p>

        <h2>
          A Place to Relax & Enjoy
        </h2>

        <p>
          Café Bliss is a cozy café where good food,
          freshly brewed coffee and great conversations
          come together.
        </p>

        <p>
          We believe every cup of coffee should create
          a memorable experience.
        </p>

        <button className="primary-btn">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default About;