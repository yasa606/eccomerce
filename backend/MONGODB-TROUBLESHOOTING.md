# MongoDB Connection Troubleshooting Guide

## 🔧 Common Connection Issues & Solutions

### Error: `queryTxt ETIMEOUT cluster0.bxlmr4y.mongodb.net`

**This error indicates DNS resolution issues with your MongoDB connection string.**

## ✅ Step-by-Step Fix

### 1. **Get Correct Connection String from MongoDB Atlas**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to your cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string (starts with `mongodb+srv://`)

### 2. **Update Your .env File**
Create or update `backend/.env` with:
```bash
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.bxlmr4y.mongodb.net/your-database-name?retryWrites=true&w=majority
```

### 3. **MongoDB Atlas Configuration Checklist**
- [ ] **Database User Created**: Ensure you've created a database user in Atlas
- [ ] **IP Whitelist**: Add your current IP to Network Access (or use 0.0.0.0/0 for testing)
- [ ] **Cluster Running**: Verify your cluster is active and running
- [ ] **Database Name**: Replace `your-database-name` with your actual database name

### 4. **Connection String Format Examples**

**Correct Format:**
```
mongodb+srv://username:password@cluster0.bxlmr4y.mongodb.net/ecommerce?retryWrites=true&w=majority
```

**Incorrect Formats (causing ETIMEOUT):**
```
cluster0.bxlmr4y.mongodb.net
mongodb://cluster0.bxlmr4y.mongodb.net
mongodb+srv://cluster0.bxlmr4y.mongodb.net
```

### 5. **Network Troubleshooting**
- **DNS Issues**: Try using Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1)
- **Firewall**: Ensure your firewall allows connections to MongoDB Atlas
- **VPN**: If using VPN, try disconnecting temporarily

### 6. **Testing Connection**
Run this test command:
```bash
node -e "const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected!')).catch(err => console.error(err))"
```

## 🚀 Quick Fix Commands

### Check if MongoDB Atlas is accessible:
```bash
# Test DNS resolution
nslookup cluster0.bxlmr4y.mongodb.net

# Test connectivity
telnet cluster0.bxlmr4y.mongodb.net 27017
```

### Environment Setup:
```bash
# Copy example env file
cp backend/.env.example backend/.env

# Edit with your credentials
nano backend/.env
```

## 📋 Verification Steps

1. **Check Environment Variables:**
   ```bash
   # In your project root
   echo $MONGODB_URI
   ```

2. **Test Connection:**
   ```bash
   cd backend
   node -e "require('./config/database.js').default()"
   ```

3. **Check MongoDB Atlas:**
   - Login to your Atlas dashboard
   - Verify cluster status is "Active"
   - Check Network Access for your IP
   - Confirm database user exists with correct permissions

## 🆘 Still Having Issues?

### Common Error Messages & Solutions:

**"Authentication failed"**
- Check username/password in connection string
- Ensure database user has read/write permissions

**"IP not whitelisted"**
- Add your IP to Network Access in MongoDB Atlas
- Or use `0.0.0.0/0` for testing (not recommended for production)

**"Server selection timed out"**
- Check if cluster is running
- Verify connection string format
- Check network connectivity

### Debug Mode:
Enable debug logging by adding to your .env:
```bash
DEBUG=mongoose:*
```

## 📞 Support Resources
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)
- [Network Access Configuration](https://docs.atlas.mongodb.com/security/ip-access-list/)
