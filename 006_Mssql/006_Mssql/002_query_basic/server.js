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
		
		// Для выполнения запросов к бд используется метод request.query(command, callback(err, data))
		// метод query принимает такие аргументы: 

		// command - выражение t-sql 
		// callback - функция с параметрами err(ошибка) и data(результат запроса к бд) 
		
		var request = new mssql.Request(connection);  
		request.query('SELECT * FROM items', function(err, data) { 
		
			if (err) console.log(err); 
			
			else {
				var html = `` 
				
				for (let i = 0; i < data.length; i++) {
					html += `<h3> ${ data[i].name } ${ data[i].description }</h3>`
				} 
				
				res.send(html); 
				
				// завершить соединение 
				connection.close(); 
			}
		
		});  
	
	}); 
	
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 
