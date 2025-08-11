import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }

    // Enhanced connection options for better reliability
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 30000, // Increased timeout
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000, // Increased timeout
      retryWrites: true,
      w: 'majority',
      retryReads: true,
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0 // Disable mongoose buffering
    };

    // Fix connection string format if it's using incorrect format
    let fixedURI = mongoURI;
    if (mongoURI.includes('mongodb.net') && !mongoURI.includes('mongodb+srv://')) {
      console.warn('⚠️  Connection string format detected as potentially incorrect');
      console.log('🔧 Please ensure your connection string starts with mongodb+srv://');
    }

    const conn = await mongoose.connect(fixedURI, options);
    
    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`🌐 Host: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`🔗 Port: ${conn.connection.port}`);
    
    // Enhanced connection event handlers
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
      console.error('🔧 Troubleshooting:');
      console.error('1. Check your connection string format');
      console.error('2. Verify MongoDB Atlas cluster is running');
      console.error('3. Ensure IP is whitelisted in MongoDB Atlas');
      console.error('4. Check network connectivity');
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️  MongoDB disconnected - attempting reconnection...');
      setTimeout(() => {
        mongoose.connect(fixedURI, options).catch(err => {
          console.error('❌ Reconnection failed:', err.message);
        });
      }, 5000);
    });

    mongoose.connection.on('connected', () => {
      console.log('✅ MongoDB reconnected successfully');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close();
        console.log('🔌 MongoDB connection closed gracefully');
        process.exit(0);
      } catch (err) {
        console.error('❌ Error closing MongoDB connection:', err);
        process.exit(1);
      }
    });

  } catch (error) {
    console.error('💥 Database connection failed:', error.message);
    console.error('🔧 Error type:', error.name);
    
    // Specific error handling
    if (error.name === 'MongoServerSelectionError') {
      console.error('\n🔧 MongoDB Server Selection Error - Common Solutions:');
      console.error('1. ✅ Check your connection string format:');
      console.error('   Format: mongodb+srv://username:password@cluster.mongodb.net/database');
      console.error('2. ✅ Whitelist your IP in MongoDB Atlas (Network Access)');
      console.error('3. ✅ Ensure username/password are correct');
      console.error('4. ✅ Check if MongoDB Atlas cluster is running');
      console.error('5. ✅ Verify database user has proper permissions');
    }
    
    if (error.name === 'MongoParseError') {
      console.error('\n🔧 MongoDB Parse Error - Connection string format issue');
      console.error('Please check your MONGODB_URI format in .env file');
    }
    
    if (error.code === 'ETIMEOUT') {
      console.error('\n🔧 DNS Resolution Timeout - Network/DNS issue');
      console.error('1. Check internet connection');
      console.error('2. Try using 8.8.8.8 or 1.1.1.1 as DNS');
      console.error('3. Check firewall settings');
    }
    
    console.error('\n📋 To fix this issue:');
    console.error('1. Copy the connection string from MongoDB Atlas');
    console.error('2. Update your .env file with the correct MONGODB_URI');
    console.error('3. Ensure your IP is whitelisted in MongoDB Atlas');
    
    process.exit(1);
  }
};

export default connectDB;
