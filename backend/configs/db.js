import mongoose from 'mongoose';
import Company from '../models/Company.js';
import User from '../models/User.js';

export async function connectToDB() {
  try {
    // const client = new MongoClient(process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL, {dbName: "PlaApp"});
    // mongoose.connect(process.env.MONGODB_URL,{
    // useUnifiedTopology:true,
    // useNewUrlParser:true,
    // });
    // const conn = await mongoose.createConnection(process.env.MONGODB_URL);
    
    
    // const {databases} = await mongoose.connection.listDatabases();
    // console.log(databases);
    
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}