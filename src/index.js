import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import './helpers/init_mongodb.js'                      //import database connection
import authRoutes from './routes/auth.route.js'         //import authorization routes
import postRoutes from './routes/post.route.js'         //import post routes

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', authRoutes);                            //authorization route middleware
app.use('/api', postRoutes);                            // post routes middleware
app.use((err, req, res, next)=>{                            //error handling middleware
    //res.status= error.status || 500;
    res.send ({
        error: {
            message: err.message,
            status: err.status || 500      
        }
    })
})

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server listening on PORT ${port}`);
})