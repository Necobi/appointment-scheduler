import express from 'express';

const app = express();

//define a port number for server to listen on
const PORT = 3003;

const appointments = [];

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

 app.get('/', (req, res) => {
   res.sendFile(`${import.meta.dirname}/views/home.html`);
  
});

app.get('/confirm-appointment', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)
});

app.get('/admin', (req, res) => {
    res.send(appointments);
});



app.post('/submit-appointment', (req, res) => {
    console.log(req.body);
    const appointment = req.body;
    appointment['timestamp'] = new Date();
    console.log(appointment);
   //add order object to orders array
   appointments.push(appointment);
   //console.log(appointments);

   //Display confirmation page
   res.sendFile(`${import.meta.dirname}/views/confirm.html`)
    //res.sendFile(`${import.meta.dirname}/views/confirm.html`)*/
});



app.listen(PORT, () => {
    console.log(`Server is runnning at http://localhost:${PORT}`);
});










