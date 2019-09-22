const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
//make the init object in small letters..

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');