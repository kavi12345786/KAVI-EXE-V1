const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/6d91fd79aab5663032b97.jpg' },
    { key: 'ALIVE_MSG', value: 'Hello , I am alive now!!' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_STATUS_REPLY', value: 'false' },
    { key: 'AUTO_STATUS_MSG', value: 'false' },
    { key: 'AUTO_REACT_STATUS', value: 'false' },
    { key: 'AUTO_RECODING', value: 'false' },
    { key: 'AUTO_TYPING', value: 'false' },
    { key: 'ANTI_CALL', value: 'false' },
    { key: 'ALWAYS_ONLINE', value: 'false' },
    { key: 'AUTO_REACT', value: 'false' },
    { key: 'OWNER_REACT', value: 'false' },
    { key: 'HEART_REACT', value: 'false' },
    { key: 'READ_CMD', value: 'false' },
     { key: 'AUTO_BIO', value: 'false' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
