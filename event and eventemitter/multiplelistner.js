const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener 1
emitter.on('greet', () => {
  console.log(' Hello Sowmiya!');
});

// Listener 2
emitter.on('greet', () => {
  console.log(' Welcome to Node.js Events!');
});

// Listener 3
emitter.on('greet', () => {
  console.log(' Let’s learn something cool today!');
});

// Trigger the event
emitter.emit('greet');
