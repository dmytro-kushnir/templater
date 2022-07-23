import { readFile } from 'fs';

export async function tickTest() {
  console.log('Start');
  setTimeout(() => console.log('SetTimeout', 0));
  setImmediate(() => console.log('setImmediate'));

  Promise.resolve().then(() => {
    console.log('Promise');
    process.nextTick(() => console.log('Promise Next Tick'));
  });

  readFile('index.js', () => {
    console.log('Read file');
    setTimeout(() => console.log('file SetTimeout', 0));
    setImmediate(() => console.log('file setImmediate'));
    process.nextTick(() => console.log('file Promise Next Tick'));
  });

  const response = await Promise.resolve('Async/Await');
  console.log('response', response);

  process.nextTick(() => console.log('After await Next Tick'));
  setTimeout(() => console.log('After await SetTimeout', 0));

  console.log('end');
}

/*
Start
Promise
response
end
Promise Next Tick
After await Next Tick
setImmediate
SetTimeout 0
After await SetTimeout 0
Read file
file Promise Next Tick
file setImmediate
file SetTimeout 0
*/
