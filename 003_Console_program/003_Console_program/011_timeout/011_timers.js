// setTimeout(callback, delay[, ...arg]) 
// callback - функция, которая будет вызвана через указанный интервал времени
// delay - задержка (в миллисекундах) 
// ...arg - аргументы, которые будут использованы при вызове callback 

var timeout = setTimeout(function () {
    console.log('timeout example'); 
}, 2000)

timeout.ref(); // вызов метода ref заставляет событийный цикл NodeJS находиться в активном состоянии до выполнения таймера. 
               // метод ref вызывается по умолчанию для всех таймеров 

//timeout.unref(); // вызов метода unref уничтожает привязку таймера к состоянию процесса NodeJS. То есть, если 
                   // событийный цикл NodeJS не выполняет никаких действий, процесс NodeJS будет завершен, не дожидаясь выполнения таймера. 

// clearTimeout(timeout); // отмена setTimeout 

// setInterval(callback, delay[, ...arg]) 
// callback - функция, которая будет вызвана через указанный интервал времени
// delay - задержка (в миллисекундах) 
// ...arg - аргументы, которые будут использованы при вызове callback 
var counter = 0;
var interval = setInterval(function () {
    console.log('interval ' + counter); 
    counter++; 

    if (counter == 10) {
        clearInterval(interval); // отмена setInterval
    }

}, 100)
