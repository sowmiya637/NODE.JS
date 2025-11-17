const EventEmitter = require('events');
const event = new EventEmitter();

event.on('order', (item, price) => {
  console.log(`Order received: ${item} — ₹${price}`);
});

event.emit('order', 'Ice Cream', 120);
