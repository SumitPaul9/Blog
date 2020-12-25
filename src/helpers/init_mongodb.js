import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() =>{
    console.log('Connected to MongoDB!')
}).catch(error=>{
    console.log(error.message);
})

mongoose.connection.on('connected', ()=>{
    console.log('mongoose connected to db!')
})

mongoose.connection.on('error', (error)=>{
    console.log(error.message);
})

mongoose.connection.on('disconnected', ()=>{
    console.log(error.message);
})

process.on('SIGINT', async()=>{
    await mongoose.connection.close();
    process.exit(0);
})