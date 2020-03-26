const Tail = require('tail-file');
const http = require('http');


const mytail = new Tail(process.argv[1], line => {
  const data = line;
  
  const options = {
    hostname: '23.236.55.114',
    port: 80,
    path: '/echo',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': data.length
    }
  };
  
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
  
    res.on('data', d => {
      process.stdout.write(d);
    });
  });
  
  req.on('error', error => {
    console.error(error);
  });
  
  req.write(data);
  req.end();
});