import express from 'express';
import printFile from './modules/stream_iterator.mjs';
import { tickTest } from './modules/event_loop_tick_test.mjs';

const app = express();

app.get('/', async (req, res) => {
  await tickTest();
  await printFile('Dockerfile.dev');
  res.send('hello');
});

app.listen(8080);
