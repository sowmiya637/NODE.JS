const EventEmitter = require('events');
const event = new EventEmitter();

event.once('start', () => console.log(' App started!'));

event.emit('start'); // works
event.emit('start'); // not work ignored
