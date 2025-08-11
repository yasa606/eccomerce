import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const testConnection = async () => {
  console.log('🔍 Testing MongoDB connection...');
  
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      console.error('❌ MONGODB_URI not found in .env file');
      console.log('📋 Please:');
      console.log('1. Copy .env.example to .env');
      console.log('2. Replace placeholders with your actual MongoDB credentials');
      process.exit(1);
    }

    console.log('🔗 Connection string format check:');
    if (mongoURI.includes('mongodb+srv://') && mongoURI.includes('mongodb.net')) {
      console.log('✅ Connection string format appears correct');
    } else {
      console.warn('⚠️ Connection string format may be incorrect');
    }

    console.log('🌐 Attempting to connect...');
    
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });

    console.log('✅ Successfully connected to MongoDB!');
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`🌐 Host: ${conn.connection.host}`);
    
    // Test basic operations
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📋 Available collections:', collections.map(c => c.name));
    
    await mongoose.connection.close();
    console.log('🔌 Connection closed successfully');
    
  } catch (error) {
    console.error('💥 Connection failed:', error.message);
    
    if (error.name === 'MongoServerSelectionError') {
      console.error('\n🔧 Common solutions:');
      console.error('1. Check your MongoDB Atlas cluster is running');
      console.error('2. Verify your IP is whitelisted in Network Access');
      console.error('3. Ensure username/password are correct');
      console.error('4. Check internet connection and DNS settings');
    }
    
    if (error.code === 'ETIMEOUT') {
      console.error('\n🔧 DNS/Network troubleshooting:');
      console.error('1. Try: nslookup cluster0.bxlmr4y.mongodb.net');
      console.error('2. Check if you can access: https://cloud.mongodb.com');
      console.error('3. Try using Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1)');
    }
    
    process.exit(1);
  }
};

testConnection();
