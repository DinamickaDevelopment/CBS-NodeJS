    // Потоки(Streams) - объекты, которые позволяют считывать данные или записывать данные в источник в непрерывном режиме.
    // В NodeJS есть 4 типа потоков: 
        // Readable - поток, который используется для операций чтения
        // Writable - поток, который используется для операци записи 

var fs = require('fs'); 
var writeData = 'This is the file content!'; 

// поток для записи данных 
// генерирует события error(при ошибке), finish(при завершении текущей операции записи данных)
var writerStream = fs.createWriteStream('output.txt'); 

writerStream.write(writeData); 

//'finish' событие генерируется после того, как метод stream.end() был вызван
writerStream.on('finish', function () {
    console.log('Write completed');
});
writerStream.end(); 
 

writerStream.on('error', function(err) {
    console.log(err); 
});

writerStream.on('close', function () {
    console.log("writerStream - CLOSE");
});

// поток для чтения данных
// генерирует события error(при ошибке), data(когда данные доступны для чтения), 
// end(когда больше нет доступных данных для чтения)
var readData = ''; 
var readerStream = fs.createReadStream('output.txt', { start: 0, end: 10 });

readerStream.setEncoding('UTF8');

readerStream.on('end', function () {
    console.log(readData);
});

readerStream.on('data', function (chunk) {
    readData += chunk; 
    console.log('Read completed'); 
});

writerStream.on('close', function () {
    console.log("readStream - CLOSE");
});

readerStream.on('error', function (err) {
    console.log(err);
}); 






