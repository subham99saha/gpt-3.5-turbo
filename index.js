const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const routes = [
    { path: "/chat", obj: require('./modules/chat/route') },
];
routes.forEach(rObj => {
    app.use(rObj.path, rObj.obj);
});


app.get('/test', (req, res) => {
  res.send('Successful response.');  
});

app.listen(3000, () => console.log('gpt-3.5-turbo app is listening on port 3000.'));