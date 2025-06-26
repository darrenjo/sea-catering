import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MealPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  image?: string;
}

const mealPlans: MealPlan[] = [
  {
    name: "🌱 Healthy Start",
    price: "Rp 350,000",
    description:
      "Perfect for beginners looking to adopt a healthier lifestyle.",
    features: [
      "3 meals per day",
      "Fresh vegetables and fruits",
      "Balanced nutrition",
      "Free nutritional consultation",
    ],
    image: "https://placehold.co/600x400/4CAF50/white?text=Healthy+Start",
  },
  {
    name: "⚡ Weight Loss",
    price: "Rp 420,000",
    description:
      "Scientifically designed meal plan for effective weight management.",
    features: [
      "Low calorie meals",
      "High protein content",
      "Metabolism boosting foods",
      "Weekly progress tracking",
    ],
    image: "https://placehold.co/600x400/FF9800/white?text=Weight+Loss",
  },
  {
    name: "💪 Muscle Gain",
    price: "Rp 500,000",
    description:
      "Protein-rich meal plan designed for muscle building and recovery.",
    features: [
      "High protein meals",
      "Post-workout nutrition",
      "Lean meats and legumes",
      "Supplement recommendations",
    ],
    image: "https://placehold.co/600x400/2196F3/white?text=Muscle+Gain",
  },
  {
    name: "🥗 Vegetarian",
    price: "Rp 380,000",
    description: "Complete plant-based nutrition for vegetarian lifestyle.",
    features: [
      "100% vegetarian meals",
      "Plant-based proteins",
      "Organic ingredients",
      "Vitamin B12 supplements",
    ],
    image: "https://placehold.co/600x400/8BC34A/white?text=Vegetarian",
  },
  {
    name: "🍎 Keto Diet",
    price: "Rp 450,000",
    description: "Low-carb, high-fat meals for ketogenic diet followers.",
    features: [
      "Less than 20g carbs per day",
      "High healthy fats",
      "Ketosis support",
      "Macro tracking included",
    ],
    image: "https://placehold.co/600x400/9C27B0/white?text=Keto+Diet",
  },
  {
    name: "👨‍👩‍👧‍👦 Family Plan",
    price: "Rp 850,000",
    description:
      "Healthy meals for the whole family with kid-friendly options.",
    features: [
      "Meals for 4 people",
      "Kid-friendly options",
      "Family nutrition guide",
      "Flexible delivery times",
    ],
    image: "https://placehold.co/600x400/E91E63/white?text=Family+Plan",
  },
];

const Menu: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(null);

  const handleSelectPlan = (plan: MealPlan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="main-content">
      <div className="hero" style={{ marginBottom: "3rem" }}>
        <h1>🍽️ Our Meal Plans</h1>
        <p>
          Choose from our carefully crafted meal plans designed by nutritionists
        </p>
      </div>

      <div className="container">
        <div className="grid-container grid-3">
          {mealPlans.map((plan, index) => (
            <div key={index} className="card">
              <img
                src={plan.image}
                alt={plan.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <h3>{plan.name}</h3>
              <p
                className="text-center"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                {plan.price}
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                  }}
                >
                  /month
                </span>
              </p>
              <p>{plan.description}</p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1rem 0",
                }}
              >
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
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

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                }}
              >
                <button
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => handleSelectPlan(plan)}
                >
                  Choose This Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="form-container" style={{ marginTop: "3rem" }}>
            <h3 className="text-center">
              🎉 You Selected: {selectedPlan.name}
            </h3>
            <div className="text-center">
              <p>
                Price: <strong>{selectedPlan.price}/month</strong>
              </p>
              <p>{selectedPlan.description}</p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Link to="/subscription" className="btn btn-primary">
                  Subscribe Now
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedPlan(null)}
                >
                  Choose Different Plan
                </button>
              </div>
            </div>
          </div>
        )}

        <section
          className="text-center"
          style={{
            marginTop: "4rem",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          <h2>🤔 Not Sure Which Plan to Choose?</h2>
          <p>
            Our nutrition experts are here to help you find the perfect meal
            plan for your goals.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get Personalized Consultation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Menu;
