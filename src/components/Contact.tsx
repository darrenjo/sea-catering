import React, { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="main-content">
      <div className="hero" style={{ marginBottom: "3rem" }}>
        <h1>📞 Contact Us</h1>
        <p>Get in touch with our team for any questions or support</p>
      </div>

      <div className="container">
        <div className="grid-container grid-2">
          {/* Contact Information */}
          <div>
            <h2>📍 Get In Touch</h2>
            <div className="card">
              <h3>🏢 SEA Catering Headquarters</h3>
              <p>
                <strong>📧 Email:</strong>{" "}
                <a href="mailto:info@seacatering.com">info@seacatering.com</a>
              </p>
              <p>
                <strong>📱 Phone:</strong>{" "}
                <a href="tel:08123456789">+62 812-3456-789</a>
              </p>
              <p>
                <strong>📍 Address:</strong> Jl. Sehat No. 123, Jakarta Selatan,
                Indonesia
              </p>
              <p>
                <strong>👨‍💼 Manager:</strong> Brian
              </p>
            </div>

            <div className="card">
              <h3>⏰ Business Hours</h3>
              <p>
                <strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p>
                <strong>Sunday:</strong> 10:00 AM - 4:00 PM
              </p>
            </div>

            <div className="card">
              <h3>🚚 Delivery Areas</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>✓ Jakarta & surrounding areas</li>
                <li>✓ Bandung</li>
                <li>✓ Surabaya</li>
                <li>✓ Medan</li>
                <li>✓ Semarang</li>
                <li>✓ More cities coming soon!</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2>💬 Send us a Message</h2>
            {isSubmitted ? (
              <div
                className="card"
                style={{
                  background:
                    "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h3>🎉 Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 812-3456-789"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="subscription">
                        Subscription Questions
                      </option>
                      <option value="delivery">Delivery Issues</option>
                      <option value="nutrition">Nutrition Consultation</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry in detail..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section style={{ marginTop: "4rem" }}>
          <h2 className="text-center mb-4">❓ Frequently Asked Questions</h2>
          <div className="grid-container grid-2">
            <div className="card">
              <h4>How do I change my meal plan?</h4>
              <p>
                You can change your meal plan anytime through your account
                dashboard or by contacting our support team.
              </p>
            </div>
            <div className="card">
              <h4>What is your delivery schedule?</h4>
              <p>
                We deliver fresh meals 6 days a week (Monday-Saturday). You can
                choose your preferred delivery time during checkout.
              </p>
            </div>
            <div className="card">
              <h4>Do you accommodate dietary restrictions?</h4>
              <p>
                Yes! We offer vegetarian, vegan, gluten-free, and keto options.
                Let us know your dietary needs when ordering.
              </p>
            </div>
            <div className="card">
              <h4>How do I pause my subscription?</h4>
              <p>
                You can pause your subscription for up to 4 weeks through your
                account or by contacting customer support.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
