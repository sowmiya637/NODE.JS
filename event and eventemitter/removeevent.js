const EventEmitter = require('events');
const event = new EventEmitter();

function greet() {
  console.log('Hello again!');
}

event.on('hello', greet);
event.emit('hello'); // works

event.removeListener('hello', greet);
event.emit('hello'); // no output
