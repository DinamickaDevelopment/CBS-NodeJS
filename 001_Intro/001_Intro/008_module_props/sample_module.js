// В данном примере показаны свойства объекта module 

// имя файла с модулем
console.log('module id: ' + module.id);
console.log('module filename: ' + module.filename);


// модуль, загрузивший указанный модуль 
console.log(module.parent);



module.exports = {
    msg: 'Sample module loaded!',
};

var module1 = require('./folder/sample_module1');


// boolean - загружен модуль или нет
console.log('module is loaded: ' + module.loaded);
console.log('module is loaded: ' + module1.loaded);

