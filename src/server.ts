import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Root route exists');
});

app.listen(3333);
