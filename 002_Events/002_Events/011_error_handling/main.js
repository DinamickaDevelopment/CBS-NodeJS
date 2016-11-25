var events = require('events');
var emitter = new events.EventEmitter;
// Когда экземпляр EventEmitter встречает любую ошибку, он генерирует событие 'error'

// в nodejs принято устанавливать обработчик на событие error,
// так как необработанные ошибки прекращают выполнение node приложения 
emitter.once('error', (err) => {
    console.log(err.message) // вывод текста ошибки на экран
    console.log("Error 1");
});

// генерация события ошибки

// первая ошибка будет обработана с помощью метода once
emitter.emit('error', new Error('Something went wrong 1!')); 

// вторая ошибка будет обработана с помощью try... catch 
try {
    emitter.emit('error', new Error('Something went wrong 2!'));
} catch (err) {
    console.log(err.message) // вывод текста ошибки на экран
    console.log("Error 2");
}

// треться ошибка прекратит работу приложения 
emitter.emit('error', new Error('Something went wrong 3!')); 

console.log("Done");
