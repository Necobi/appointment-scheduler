import express from 'express';

const app = express();

//define a port number for server to listen on
const PORT = 3003;
app.get('/', (req, res) => {
   res.sendFile(`${import.meta.dirname}/views/home.html`);
  
});

app.listen(PORT, () => {
    console.log(`Server is runnning at http://localhost:${PORT}`);
});
