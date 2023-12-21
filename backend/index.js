import express from 'express';
import dotenv from 'dotenv'
import ProductRouter from './routes/ProductRouter.js';
import connectDb from './ConnectDb.js';
const app = express();
dotenv.config()
const dataBase_URL = process.env.DATABASE_URL
connectDb(dataBase_URL)
app.use(express.json())
app.use('/api/products',ProductRouter)
app.get('/', (req, res)=> {
    res.send('Hello World');
  }) 
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);