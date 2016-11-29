var fs = require('fs');

var writerStream = fs.createWriteStream('output1.txt'); 

// В данном примере проводится сравнение работы с потоками данных с работой с методами read/write
// Как методы потоков, так и методы read/write 


writerStream.write('Sample Data 1 ', function (err) {
    if (err) console.log(err); 
    else console.log('write stream finish')
}); 


fs.open('output2.txt', 'w+', function (err, fd) {
    fs.write(fd , 'Sample Data 2', function (err) {
        if (err) console.log(err); 
        console.log('write end')
    }) 
})

