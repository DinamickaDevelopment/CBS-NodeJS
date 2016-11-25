var events = require('events');
var emitter = new events.EventEmitter;

// Для удаления обработчика событий в NodeJS используется метод removeListener.  
// Метод принимает 2 аргумента - имя события и его обработчик.   

emitter.on('event', listener);

var counter = 0; 

for (var i = 0; i < 10; i++) {
    emitter.emit('event'); 
}

function listener() { 
    counter++; 
    console.log(`listener exectuted ${counter} times`); 

    if (counter > 4) {
        emitter.removeListener('event', listener); 
        console.log('event listener removed!'); 
    }
}


