var events = require('events');
var emitter = new events.EventEmitter;

var listener1 = () => {
    console.log('listener 1 executed');
}
var listener2 = () => {
    console.log('listener 2 executed');
}

var listener3 = () => {
    console.log('listener 3 executed');
}

emitter.on('error', (err) => {
    console.log("Custom error");
})

emitter.on('event', listener1);
emitter.on('event', listener2);
emitter.once('event', listener3);  

// console.log(emitter); 
// _events - внутреннее свойство объекта EventEmitter, в котором хранятся обработчики событий 
var emitter_events = emitter._events; 
console.log(emitter_events.event);  // вывод в консоль массив обработчиков события event 

// получение типов событий, на которые назначены обработчики 
var handled_events = []; 

for (name in emitter_events) {
    handled_events.push(name); 
}

// вывод в консоль типов событий с назначенными обработчиками 
console.log('events with handlers: ' + handled_events.join(', ')); 

// функция listenerCount возвращает количество обработчиков события, 
// имя которого ей переданно в качестве аргумента 
var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 3 

emitter.emit('event');

var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 2, так как обработчик, назначенный с помощью once, был удален  

// removeAllListeners - функция, которая удаляет все обработчики события, 
// переданного ей в качестве аргумента. Если функция запущена без аргументов, 
// она удаляет все обработчики событий, чего делать не рекомендуется 
emitter.removeAllListeners('event');

var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 0



