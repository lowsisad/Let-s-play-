var http = require('http'); 
var fs = require('fs'); 
var url = require('url'); 
var path = require('path'); 
var x = '<h2>Ты проиграл.</h2>';
var port = 8080;

const server = http.createServer(function(req, res) {

 	 // обработка ошибок запросов
 	 req.on('error', function(err) {
 	 	console.log(err); 
 	 }); 
      
       if (req.url == '/') {

           // чтение файла index.html
           var file_path = path.join(__dirname, 'index.html'); 
           fs.readFile(file_path, function (err, data) { 

                   res.writeHead(200, { 'Content-Type': 'text/html' }); 
                   // записать в овет содержимое читаемого файла 
                   res.write(data.toString());

				   res.end();
           });
       }
       else if (req.url == '/request') {

           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.write(x);
           res.end();

           console.log('data sent!');
       }
       else {
           res.writeHead(404, { 'Content-Type': 'text/html' }); 
           res.end('Resource not found'); 
       }

}).listen(port); 
console.log('server running on port ' + port); 
