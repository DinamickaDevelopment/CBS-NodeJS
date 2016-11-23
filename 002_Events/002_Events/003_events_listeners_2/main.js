var events = require('events');
var emitter = new events.EventEmitter;

// метод once позволяет вызвать обработчик события 1 раз, после чего он будет удален 
emitter.once('event', listener);

emitter.emit('event');
emitter.emit('event');

function listener() {
    console.log('listener executed');
} 