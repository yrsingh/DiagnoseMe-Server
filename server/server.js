const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Symptom = require('./Symptom');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbRoute = 'mongodb://localhost:27017/DiagnoseMeDB';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => { console.log('Connected to the database'); });

app.get('/api/getSymptoms', (req, res) => {
  Symptom.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));