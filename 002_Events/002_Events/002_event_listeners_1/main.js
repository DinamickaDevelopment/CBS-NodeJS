var events = require('events');
var emitter = new events.EventEmitter;

// в NodeJS существует два метода для назначения обработчика события: 

// метод on
emitter.on('event1', listener);

// метод addListener 
emitter.addListener('event2', listener);

emitter.emit('event1');
emitter.emit('event2');

function listener() {
    console.log('listener executed');
}

