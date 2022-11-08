import express from 'express';
import {router} from "./src/router/router";

const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.json());
app.use('',router);

const PORT = 3000;


app.listen(PORT,()=>{
    console.log('--Server is Running--');
})
