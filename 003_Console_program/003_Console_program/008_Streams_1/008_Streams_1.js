    // Потоки(Streams) - объекты, которые позволяют считывать данные или записывать данные в источник в непрерывном режиме. 
    // 
    // В NodeJS есть 2 основных вида потоков: 
        // Readable - поток, который используется для операций чтения
        // Writable - поток, который используется для операци записи 

    // Методы потоков асинхронны

var fs = require('fs'); 
var writeData = 'This is the file content!'; 

// поток для записи данных 
// генерирует события error(при ошибке), finish(при завершении текущей операции записи данных с помощью метода end)
var writerStream = fs.createWriteStream('output.txt'); 

writerStream.write(writeData); 

// событие 'finish' генерируется после того, как был вызван метод stream.end() 
// событие 'finish' относится только к потокам типа writable
writerStream.on('finish', function () {
    console.log('writerStream - FINISH'); 
}); 

// завершить запись данных текущего потока. 
writerStream.end();  

// writerStream.write('Some more data'); // При попытке записи данных после вызова метода end произойдет ошибка 
 

writerStream.on('error', function(err) {
    console.log(err); 
});


// событие close генерируется при вызове метода stream.close() или методов stream.end() и stream.finish()
writerStream.on('close', function () {
    console.log("writerStream - CLOSE");
});

// событие finish потока для записи данных 
writerStream.on('finish', function () {

    // поток для чтения данных
    // генерирует события error(при ошибке), data(когда данные доступны для чтения), 
    // end(когда больше нет доступных данных для чтения)
    var readData = '';
    var readerStream = fs.createReadStream('output.txt', { start: 0, end: 25 });

    readerStream.setEncoding('UTF8');

    // событие data генерируется после прочтения данных. Прочитанные данные доступны через аргумент обработчика события 
    readerStream.on('data', function (chunk) {

        readData += chunk;
    });

    readerStream.on('close', function () {
        console.log("readStream - CLOSE");
    });


    // событие end относится только к потокам типа readable 
    // происходит когда в потоке не осталось данных для чтения 
    readerStream.on('end', function () {
        console.log("readStream - END");
        console.log(readData);
    });

    readerStream.on('error', function (err) {
        console.log(err);
    });


})





