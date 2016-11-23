var express  = require('express'); 
var app = express(); 

var port = process.env.port || 1337; 

var mssql = require('mssql'); 


app.use(function(req, res) { 
			
	// подключение к бд с помощью строки соединения в формате: 
	// mssql://имя_пользователя:пароль@хост:порт/бд 
	
	mssql.connect("mssql://demo_user:12345@localhost:1433/demo").then(function() {
 
		var value = 1; 
		
		// альтернативный синтаксис метода query 
		mssql.query`SELECT * FROM items WHERE id = ${value}`
			.then(function(recordset) { 
				res.send(recordset[0].description); 
				console.dir(recordset);
			})
			.catch(function(err) {
				console.log(err)
			});
		
		})
		.catch(function(err) {
			console.log(err)
		})
		
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 
