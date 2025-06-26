// src/components/Testimonials.tsx
import React, { useState } from "react";

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    name: "Alice",
    message: "Great meals! Very healthy and delicious.",
    rating: 5,
  },
  { name: "Bob", message: "I love the variety of meal plans.", rating: 4 },
];

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(initialTestimonials);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTestimonial = { name, message, rating };
    setTestimonials([...testimonials, newTestimonial]);
    setName("");
    setMessage("");
    setRating(5);
  };

  return (
    <div className="main-content">
      <div className="container">
        <h2 className="text-center mb-4">💬 Customer Testimonials</h2>
        <p className="text-center mb-4">
          See what our customers say about SEA Catering
        </p>

        <div className="form-container">
          <h3 className="text-center mb-3">📝 Share Your Experience</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Review</label>
              <textarea
                id="message"
                placeholder="Tell us about your experience with SEA Catering..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating (1-5 stars)</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                <option value={3}>⭐⭐⭐ (3 stars)</option>
                <option value={2}>⭐⭐ (2 stars)</option>
                <option value={1}>⭐ (1 star)</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Testimonial
            </button>
          </form>
        </div>

        <div className="grid-container grid-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h4>
                {testimonial.name}{" "}
                <span className="testimonial-rating">
                  {Array(testimonial.rating).fill("⭐").join("")}
                </span>
              </h4>
              <p>"{testimonial.message}"</p>
              <small>Rating: {testimonial.rating}/5 stars</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
