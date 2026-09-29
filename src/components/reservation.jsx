import { useState } from "react";

function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const date = formData.get("date");
    const guests = formData.get("guests");

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          guests,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "SMS could not be sent");
      }

      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="reservation" id="reservation">
      <div className="section-heading">
        <p>BOOK A TABLE</p>
        <h2>Make a Reservation</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />

        <input
          type="date"
          name="date"
          required
        />

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          min="1"
          required
        />

        <button
          type="submit"
          className="primary-btn"
          disabled={loading}
        >
          {loading ? "Sending..." : "Reserve Table"}
        </button>
      </form>

      {submitted && (
        <p className="success-message">
          Your reservation request has been submitted and SMS confirmation has been sent!
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </section>
  );
}

export default Reservation;