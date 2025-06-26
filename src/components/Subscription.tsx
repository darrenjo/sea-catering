import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "weekly",
    name: "🗓️ Weekly Plan",
    price: 120000,
    duration: "1 Week",
    features: [
      "7 days of healthy meals",
      "Flexible meal choices",
      "Free delivery",
      "No commitment",
    ],
  },
  {
    id: "monthly",
    name: "📅 Monthly Plan",
    price: 400000,
    originalPrice: 480000,
    duration: "1 Month",
    savings: "Save 80,000",
    popular: true,
    features: [
      "30 days of premium meals",
      "Nutrition consultation",
      "Priority delivery",
      "Meal customization",
      "Weekly progress reports",
    ],
  },
  {
    id: "quarterly",
    name: "🎯 Quarterly Plan",
    price: 1000000,
    originalPrice: 1200000,
    duration: "3 Months",
    savings: "Save 200,000",
    features: [
      "90 days of premium meals",
      "Personal nutritionist",
      "VIP customer support",
      "Advanced meal customization",
      "Bi-weekly health check-ins",
      "Free recipe book",
    ],
  },
];

const Subscription: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null,
  );
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dietaryPreferences: "",
    allergies: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePlanSelect = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription submitted:", { selectedPlan, customerInfo });
    setIsSubmitted(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (isSubmitted) {
    return (
      <div className="main-content">
        <div className="container">
          <div
            className="hero"
            style={{
              background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
              color: "white",
            }}
          >
            <h1>🎉 Subscription Successful!</h1>
            <p>Welcome to SEA Catering! Your healthy journey starts now.</p>
            <p>
              We'll contact you within 24 hours to confirm your first delivery.
            </p>
          </div>

          <div className="card text-center">
            <h3>📋 Your Subscription Details</h3>
            <p>
              <strong>Plan:</strong> {selectedPlan?.name}
            </p>
            <p>
              <strong>Duration:</strong> {selectedPlan?.duration}
            </p>
            <p>
              <strong>Price:</strong>{" "}
              {selectedPlan ? formatPrice(selectedPlan.price) : ""}
            </p>
            <p>
              <strong>Customer:</strong> {customerInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {customerInfo.email}
            </p>

            <div style={{ marginTop: "2rem" }}>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="hero" style={{ marginBottom: "3rem" }}>
        <h1>💳 Subscription Plans</h1>
        <p>Choose the perfect plan for your healthy lifestyle journey</p>
      </div>

      <div className="container">
        {/* Subscription Plans */}
        <div className="grid-container grid-3">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`card ${
                selectedPlan?.id === plan.id ? "selected" : ""
              }`}
              style={{
                border:
                  selectedPlan?.id === plan.id
                    ? "3px solid #667eea"
                    : undefined,
                position: "relative",
                cursor: "pointer",
                transform:
                  selectedPlan?.id === plan.id ? "scale(1.05)" : undefined,
                transition: "all 0.3s ease",
              }}
              onClick={() => handlePlanSelect(plan)}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "20px",
                    background: "#FF6B35",
                    color: "white",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  🔥 POPULAR
                </div>
              )}

              <div className="text-center">
                <h3>{plan.name}</h3>
                <div style={{ margin: "1rem 0" }}>
                  {plan.originalPrice && (
                    <p
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        margin: 0,
                        fontSize: "0.9rem",
                      }}
                    >
                      {formatPrice(plan.originalPrice)}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#667eea",
                      margin: "0.5rem 0",
                    }}
                  >
                    {formatPrice(plan.price)}
                  </p>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    per {plan.duration}
                  </p>
                  {plan.savings && (
                    <p
                      style={{
                        color: "#4CAF50",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      💰 {plan.savings}
                    </p>
                  )}
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1.5rem 0",
                }}
              >
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid #f0f0f0",
                      color: "#555",
                    }}
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn ${
                  selectedPlan?.id === plan.id ? "btn-primary" : "btn-secondary"
                }`}
                style={{ width: "100%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlanSelect(plan);
                }}
              >
                {selectedPlan?.id === plan.id ? "✓ Selected" : "Select Plan"}
              </button>
            </div>
          ))}
        </div>

        {/* Subscription Form */}
        {selectedPlan && (
          <div className="form-container" style={{ marginTop: "3rem" }}>
            <h2 className="text-center">📝 Complete Your Subscription</h2>
            <p className="text-center">
              Selected Plan: <strong>{selectedPlan.name}</strong> -{" "}
              {formatPrice(selectedPlan.price)}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid-container grid-2">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid-container grid-2">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+62 812-3456-789"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dietaryPreferences">
                    Dietary Preferences
                  </label>
                  <select
                    id="dietaryPreferences"
                    name="dietaryPreferences"
                    value={customerInfo.dietaryPreferences}
                    onChange={handleInputChange}
                  >
                    <option value="">Select preference</option>
                    <option value="none">No restrictions</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="keto">Keto</option>
                    <option value="halal">Halal</option>
                    <option value="gluten-free">Gluten-free</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete delivery address..."
                  rows={3}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="allergies">Food Allergies (Optional)</label>
                <textarea
                  id="allergies"
                  name="allergies"
                  value={customerInfo.allergies}
                  onChange={handleInputChange}
                  placeholder="Please list any food allergies or intolerances..."
                  rows={2}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: "1rem 3rem",
                    fontSize: "1.1rem",
                  }}
                >
                  🚀 Start My Subscription - {formatPrice(selectedPlan.price)}
                </button>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.9rem",
                    color: "#666",
                  }}
                >
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Benefits Section */}
        <section style={{ marginTop: "4rem" }}>
          <h2 className="text-center mb-4">
            🌟 Why Subscribe to SEA Catering?
          </h2>
          <div className="grid-container grid-3">
            <div className="card text-center">
              <h3>💰 Save Money</h3>
              <p>
                Get better value with our subscription plans compared to
                one-time orders.
              </p>
            </div>
            <div className="card text-center">
              <h3>⏱️ Save Time</h3>
              <p>
                No more meal planning or grocery shopping. We handle everything
                for you.
              </p>
            </div>
            <div className="card text-center">
              <h3>🎯 Consistency</h3>
              <p>
                Stay on track with your health goals with regular, nutritious
                meals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Subscription;
