import express from 'express';

const app = express();

//define a port number for server to listen on
const PORT = 3003;
app.get('/', (req, res) => {
   res.send('Hello World');
  
});

app.listen(PORT, () => {
    console.log(`Server is runnning at http://localhost:${PORT}`);
});
