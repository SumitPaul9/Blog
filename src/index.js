import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

import './helpers/init_mongodb.js'    //import database connection

const app = express();

app.use(express.json());
app.use(morgan('dev'));


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server listening on PORT ${port}`);
})