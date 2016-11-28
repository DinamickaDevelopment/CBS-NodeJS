var fs = require('fs');
var writeData = 'This is some sample data'; 

var writerStream = fs.createWriteStream('output1.txt'); 


writerStream.write('Sample data 1 '); 

writerStream.on('finish', function () {
    console.log('write stream finish');
}); 

writerStream.on('close', function () {
    console.log('write stream close')
});


// writerStream.close(); // после вызова метода close данные не будут записаны, но ошибки при попытке записи данных не произойдет  


writerStream.write('Sample data 2 ');   

// writerStream.end(); // после вызова метода end при попытке записи данных произойдет ошибка 

writerStream.write('Sample data 3 ');   

fs.open('output2.txt', 'w+', function (err, fd) {
    fs.write(fd , writeData, function (err) {
        if (err) console.log(err); 
        console.log('write end')
    }) 
})
