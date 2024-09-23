import http from 'http';


const server = http.createServer((req, res) => {
    console.log(req.url);
    
    res.end('Hello World!!');
});


server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});