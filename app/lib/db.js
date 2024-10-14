// app/lib/db.js
import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(process.env.MONGO_URL, opts)
            .then((mongooseInstance) => {
                console.log('DB Connected');
                return mongooseInstance;
            })
            .catch((error) => {
                console.error('DB Connection Error:', error);
                throw error;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
