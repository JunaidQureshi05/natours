const express = require('express');
const fs = require('fs');
const port = 3000;
const app = express();
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);

app.get('/', (req, res) => {
  res.json({
    name: 'Natours API',
  });
});

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});
app.post('/', (req, res) => {
  res.send('you can post to this route');
});
app.listen(port, () => console.log('Server started on port 3000'));
