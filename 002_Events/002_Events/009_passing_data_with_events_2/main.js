var events = require('events');
var emitter = new events.EventEmitter;


emitter.on('event', function (data) {
    console.log(data); 
});

function emitterWrapper() {
    var msg = 'Hello from event!'; 

    function greet(msg) {
        console.log(msg) 

        return msg; 
    }

    // функция greet будет выполнена при генерации события event, 
    // а ее результат будет передан обработчику события 
    emitter.emit('event', greet(msg));
};

emitterWrapper(); 