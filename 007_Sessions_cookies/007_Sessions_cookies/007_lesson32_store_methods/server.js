var express = require('express');
var app = express();

var port = process.env.port || 1337; 

var session = require('express-session');

// подключение модуля express-mysql-session 
var MySQLStore = require('express-mysql-session')(session);

// подключение модуля connect-mssql
var MSSQLStore = require('connect-mssql')(session);

var mssql = require('mssql');

var config = {
	
	driver: 'tedious',   // драйвер mssql
	user: 'demo_user',   // пользователь базы данных
	password: '12345', 	 // пароль пользователя 
	server: 'localhost', // хост
	database: 'sessions',    // имя бд
	port: 1433,			 // порт, на котором запущен sql server
	pool: {
        max: 10, // максимальное допустимое количество соединений пула 
        min: 0,  // минимальное допустимое количество соединений пула 
        idleTimeoutMillis: 30000 // время ожидания перед завершением неиспользуемого соединения 
    }
	
	
} 


// создание хранилища для сессии 
var store =  new MSSQLStore(config); 

app.use(session({
    store: new MSSQLStore(config), 
	resave: false,
    saveUninitialized: true,
    secret: 'supersecret'
}));  


// обработчик события установки соединения с хранилищем сессии 
store.on('connect', function() {	
	console.log('connected to session store'); 
}); 
	
// обработчик события ошибки соединения с хранилищем сессии 
store.on('error', function() {
	console.log('sesssion store error'); 
}); 

app.get('/', function (req, res) {

    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    var requestCount = () => {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests;
    }

    res.set('Content-Type', 'text/html'); 
    res.end('<h2>Number of reguests: ' + requestCount() + '</h2>' + 
        ' <h5>Refresh the page to increase count</h5>') 

    
});

app.listen(port, function () {
    console.log('app running on port ' + port);
})