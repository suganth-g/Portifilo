import { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.PROD
                ? '/_/backend/api/contact'
                : 'http://localhost:5000/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section reveal">
            <div className="container">
                <div className="contact-header">
                    <h2 className="section-title">
                        Got ideas? <span className="highlight">Let's team up.</span>
                    </h2>
                    <p className="contact-subtitle">
                        Feel free to reach out to discuss potential projects, collaborations, or any questions you may have.
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Left card */}
                    <div className="contact-info glass-card">
                        <div className="contact-icon">👋</div>
                        <h3>Suganth G</h3>
                        <div className="info-item">
                            <span>✉️</span>
                            <a href="mailto:suganthg2007@gmail.com">suganthg2007@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span>📞</span>
                            <p>9361872943</p>
                        </div>
                        <div className="info-item">
                            <span>📍</span>
                            <p>Namakkal, Tamil Nadu</p>
                        </div>
                    </div>

                    {/* Right form */}
                    <form id="contactForm" className="contact-form glass-card" onSubmit={handleSubmit}>
                        <h3>Reach out.</h3>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your Phone Number"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Why are you reaching out?"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Submit Message'}
                        </button>
                        {showSuccess && (
                            <div className="success-message">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {isSubmitting && (
                <div id="loading-screen">
                    <div className="loader"></div>
                    <p>Sending message...</p>
                </div>
            )}
        </section>
    );
};

export default Contact;
