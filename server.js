import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './backend/routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Needed to use __dirname with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transporter
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration in environment variables');
    return null;
  }

  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const transporter = createTransporter();
if (!transporter) {
  console.error('Email transporter not configured. Please check your .env file.');
}

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email address is required' });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: 'Please provide a valid email address format' });

    if (!transporter) return res.status(500).json({ error: 'Email service temporarily unavailable. Please try again later.' });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
    if (!adminEmail) return res.status(500).json({ error: 'Email configuration incomplete. Please contact support.' });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Newsletter Subscription - Luxury Store',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Newsletter Subscription</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${req.ip || 'Unknown'}</p>
            <p>This user has subscribed to your luxury newsletter.</p>
          </div>
        </div>
      `
    };

    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Luxury Newsletter - Exclusive Access',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to Our Luxury Newsletter!</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
            <p>Thank you for subscribing to our exclusive luxury newsletter.</p>
            <p>You'll receive updates on:</p>
            <ul>
              <li>Latest luxury collections</li>
              <li>Exclusive member benefits</li>
              <li>Early access to sales</li>
              <li>Special promotions</li>
            </ul>
            <p>We look forward to keeping you updated with the finest in luxury fashion!</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    res.json({ message: 'Successfully subscribed to newsletter!' });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    let errorMessage = 'Failed to subscribe. Please try again.';

    if (error.code === 'ECONNECTION') errorMessage = 'Unable to connect to email service. Please try again later.';
    else if (error.code === 'EAUTH') errorMessage = 'Email service authentication failed. Please contact support.';
    else if (error.code === 'EENVELOPE') errorMessage = 'Invalid email configuration. Please contact support.';

    res.status(500).json({ error: errorMessage });
  }
});

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    emailConfigured: !!transporter,
    timestamp: new Date().toISOString()
  });
});

// Test email configuration endpoint
app.get('/api/newsletter/test-config', (req, res) => {
  res.json({
    emailConfigured: !!transporter,
    hasUser: !!process.env.EMAIL_USER,
    hasPass: !!process.env.EMAIL_PASS,
    adminEmail: process.env.ADMIN_EMAIL || process.env.EMAIL_USER
  });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service configured: ${!!transporter}`);
});
