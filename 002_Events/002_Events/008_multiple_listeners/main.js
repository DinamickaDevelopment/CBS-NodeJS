var events = require('events');
var emitter = new events.EventEmitter; 

// Одно событие может быть обработано несколькими обработчиками 

emitter.on('event', function () {
    console.log('listener 1 executed');
});  

emitter.on('event', function () {
    console.log('listener 2 executed');
}); 

emitter.on('event', function () {
    console.log('listener 3 executed'); 
})

emitter.emit('event'); 

console.log(emitter);