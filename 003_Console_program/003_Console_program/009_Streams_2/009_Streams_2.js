// Piping streams - перенаправление данных одного потока к другому потоку  

var fs = require("fs");

// создать поток для чтения данных
var readerStream = fs.createReadStream('input.txt');

// создать поток для записи данных
var writerStream = fs.createWriteStream('output.txt');

// передача данных потока readerStream потоку writerStream 
readerStream.pipe(writerStream); 


// обработка ошибок 
readerStream.on('error', function (err) {
    if (err) {
        console.log(err.message);
        readerStream.close();
    }
}); 

writerStream.on('error', function (err) {
    if (err) {
        console.log(err.message);
        writerStream.close();
    }  
}) 

readerStream.on('close', close_handler);  
writerStream.on('close', close_handler);  

function close_handler() {
    console.log('CLOSE stream');
} 

//readerStream.emit('error', new Error('oops! read stream error!')); 
//writerStream.emit('error', new Error('oops! write stream error!')); 

writerStream.on('finish', function () {
    console.log('pipe complete')
    console.log('data written to file output.txt')
});