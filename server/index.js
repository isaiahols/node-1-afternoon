const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/message_controller')

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build'))

const port = 3000;

//Middleware goes here

app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.post('/api/messages', mc.create);
app.delete('/api/messages/:id', mc.delete)





//I'm listening...
app.listen(port, () => {
    console.log("Please tell me something soon");

})


