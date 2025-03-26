const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler:
const myEventHandler = function () {
  console.log('I hear a scream!');
}