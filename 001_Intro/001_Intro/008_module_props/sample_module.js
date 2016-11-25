// В данном примере показаны свойства объекта module 

// имя файла с модулем
console.log('module filename: ' + module.filename);


// модуль, загрузивший указанный модуль 
console.log(module.parent);



module.exports = {
    msg: 'Sample module loaded!',
};

var module1 = require('./folder/sample_module1');

// module.loaded - boolean - свойство, которое указывает, загружен модуль или нет
console.log('child module is loaded: ' + module.children[0].loaded); // true, дочерний модуль загружен 
console.log('this module is loaded: ' + module.loaded); // false, при обращении к свойству loaded текущего модуля, его значение всегда false  
