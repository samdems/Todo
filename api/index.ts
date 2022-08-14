import express from 'express'; 
import dotenv from 'dotenv';
import router from './router';
import bodyParser from 'body-parser'
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use('/api/',router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});