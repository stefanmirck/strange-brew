import express from 'express';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '1337';

app.get('/', (req, res) => res.end('Oh, hell no Kitty!'));

app.listen(port, host, (err) => {
  if (err) console.log('Oops! Something went wrong!');
  console.log('Server started at %s:%d', host, port);
});
