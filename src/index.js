import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res)=>{
    console.log("A new request has arrived to index.js");
    res.send("<h1 style='color: red'>Hello from the server main page</h1>");
    
}
);

app.listen(port, ()=>{
    console.log("Server is up and running at port: " + port);
});