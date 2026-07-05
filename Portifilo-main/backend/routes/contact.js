const express = require('express');
const router = express.Router();

// POST handle contact form submission
router.post('/', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate the required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    // In a production environment, you would use a service like Nodemailer
    // to send an email, or save this data to MongoDB.
    // For now, we will log it and simulate a successful save/send.
    
    console.log(`--- New Contact Message Received ---`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Message: ${message}`);
    console.log(`------------------------------------`);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

module.exports = router;
