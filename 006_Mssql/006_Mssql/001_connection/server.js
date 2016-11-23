var express  = require('express'); 
var app = express(); 

var port = process.env.port || 1337; 

var mssql = require('mssql'); 


// параметры соединения с бд
var config = {
	
	driver: 'tedious',   // драйвер mssql
	user: 'demo_user',   // пользователь базы данных
	password: '12345', 	 // пароль пользователя 
	server: 'localhost', // хост
	database: 'demo',    // имя бд
	port: 1433,			 // порт, на котором запущен sql server
    pool: {
        max: 10, // максимальное допустимое количество соединений пула 
        min: 0,  // минимальное допустимое количество соединений пула 
        idleTimeoutMillis: 30000 // время ожидания перед завершением неиспользуемого соединения 
    }
	
}

app.use(function(req, res) { 

	var connection = new mssql.Connection(config); 

	connection.connect(function(err){
		

		var request = new mssql.Request(connection);  
		
		request.query('SELECT * FROM items WHERE id=1', function(err, data) {
			if (err) console.log(err); 
			else {
				
				console.log(data); 
				res.send(data[0].description); 
				
			}

		}) 
		
	})
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 