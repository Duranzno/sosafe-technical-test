import * as dotenv from 'dotenv'
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { trigger } from './pusher';
dotenv.config()
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('PORT',  process.env.SERVER_PORT||4000);

app.post('/upload', (req, res): void => {
  const payload = req.body;
  console.log("Will send to Pusher",payload)
  trigger(payload);
  res.send(payload);
});

app.listen(app.get('PORT'), (): void =>
  console.log('Listening at ' + app.get('PORT')),
);
