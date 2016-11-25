var events = require('events'); 
var emitter = new events.EventEmitter; 

// Метод getMaxListeners позволяет максимальное количество обработчиков, разрешенных для одного события.
// При превышении данного количество, в консоль будет выводиться предупреждение о возможной утечке памяти. 
// По умолчанию максимальное разрешенное количество обработчиков - 10. 
console.log('max listeners for test event: ' + emitter.getMaxListeners()) // 10 

// на последней итерации цикла в консоль будет выведено предупреждение 
for (var i = 0; i < 11; i++) {
    emitter.on('test', function () {
        console.log('test event');
    });

    console.log('listener count for test event: ' + emitter.listenerCount('test'));
}

// метод setMaxListeners позволяет установить максимальное количество обработчиков, разрешенное для одного события 
emitter.setMaxListeners(20);

console.log('max listeners for test event: ' + emitter.getMaxListeners()) // 20 