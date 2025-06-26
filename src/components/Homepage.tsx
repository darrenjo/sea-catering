import React from "react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <div className="hero">
        <h1>🍽️ SEA Catering</h1>
        <p>"Healthy Meals, Anytime, Anywhere"</p>
        <p>
          We are a customizable healthy meal service with delivery all across
          Indonesia.
        </p>
        <Link to="/menu" className="btn btn-secondary">
          Explore Our Menu
        </Link>
      </div>

      <div className="container">
        {/* Features Section */}
        <section>
          <h2 className="text-center mb-4">🌟 Our Key Features</h2>
          <div className="grid-container grid-3">
            <div className="card text-center">
              <h3>🎯 Meal Customization</h3>
              <p>
                Tailor your meals to your dietary needs and preferences with our
                flexible customization options.
              </p>
            </div>
            <div className="card text-center">
              <h3>🚚 Fast Delivery</h3>
              <p>
                Quick and reliable delivery to major cities across Indonesia,
                ensuring your meals arrive fresh.
              </p>
            </div>
            <div className="card text-center">
              <h3>📊 Nutritional Info</h3>
              <p>
                Detailed nutritional information for every meal to help you make
                informed dietary choices.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <div className="grid-container grid-2">
            <div>
              <h2>🥗 Why Choose SEA Catering?</h2>
              <ul className="feature-list">
                <li>✓ Fresh, locally-sourced ingredients</li>
                <li>✓ Chef-prepared healthy meals</li>
                <li>✓ Flexible subscription plans</li>
                <li>✓ Eco-friendly packaging</li>
                <li>✓ 24/7 customer support</li>
              </ul>
            </div>
            <div className="card">
              <h3>📞 Contact Information</h3>
              <p>
                <strong>Manager:</strong> Brian
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:08123456789">08123456789</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@seacatering.com">info@seacatering.com</a>
              </p>
              <div className="mt-3">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2>🎯 Ready to Start Your Healthy Journey?</h2>
          <p>
            Join thousands of satisfied customers who trust SEA Catering for
            their daily nutrition needs.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <Link to="/subscription" className="btn btn-primary">
              View Subscription Plans
            </Link>
            <Link to="/testimonials" className="btn btn-secondary">
              Read Customer Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
