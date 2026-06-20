import React, { useState } from 'react';

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
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
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
                    <h2 className="section-title">Got ideas? <span className="highlight">Let's team up.</span></h2>
                    <p className="contact-subtitle">Feel free to reach out to discuss potential projects, collaborations, or any questions you may have.</p>
                </div>
                
                <div className="contact-wrapper">
                    {/* LEFT CARD */}
                    <div className="contact-info glass-card">
                        <div className="contact-icon">👋</div>
                        <h3>Suganth G</h3>
                        <div className="info-item hover-target">
                            <i className="devicon-google-plain"></i>
                            <a href="mailto:suganthg2007@gmail.com">suganthg2007@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span>📞</span>
                            <p>9361872943</p>
                        </div>
                        <div className="info-item">
                            <span>📍</span>
                            <p>Namakkal</p>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form id="contactForm" className="contact-form glass-card" onSubmit={handleSubmit}>
                        
                        <h3>Reach out.</h3>
                        
                        <div className="form-group">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="hover-target" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="hover-target" />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="hover-target" />
                        </div>
                        
                        <div className="form-group">
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Why are you reaching out?" rows="4" required className="hover-target"></textarea>
                        </div>
                        
                        <button type="submit" className="btn-primary hover-target">Submit Message</button>
                        
                        {showSuccess && (
                            <div id="successMsg" className="success-message">
                                Message successfully sent! I will get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Loading Screen */}
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
