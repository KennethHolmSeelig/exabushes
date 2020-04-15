const Tail = require('nodejs-tail');
const http = require('http');

const tail = new Tail(process.argv[2]);
console.log('tailing:', process.argv[2]);

tail.on('line', (line) => {
  const data = line;
  
  const options = {
    hostname: '35.223.117.181',
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
  process.stdout.write(line);
});
 
tail.on('close', () => {
  console.log('watching stopped');
});
 
tail.watch();