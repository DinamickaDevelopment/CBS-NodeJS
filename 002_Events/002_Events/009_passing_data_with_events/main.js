var events = require('events');
var emitter = new events.EventEmitter; 

// В данном примере показана передача данных через события  

emitter.on('event', function (data) {
    console.log(data); // Hello from event! 
});  

function emitterWrapper() {
    var msg = 'Hello from event!'; 
    emitter.emit('event', msg); 
}; 

emitterWrapper(); 