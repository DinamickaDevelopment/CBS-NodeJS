// Когда добавлен новый обработчик события, EventEmitter генерирует событие 'newListener'
// Когда удален обработчик события, генерируется событие 'removeListener'

'use strict';

// импорт модуля events
const events = require('events');

// создание экземпляра EventEmitter
const emitter = new events.EventEmitter;

emitter.on('newListener', () => {
    console.log('event listener added!')
});

emitter.on('removeListener', () => {
    console.log('event listener removed!')
});

let counter = 0;
let count = () => {
    counter++;
    console.log(counter);
};

emitter.on('count', count);

emitter.emit('count');
emitter.emit('count');

emitter.removeListener('count', count); 



