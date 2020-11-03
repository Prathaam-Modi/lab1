const http = require("http");  
const msg=require('./helper')

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.write(msg.hi);
        res.end();
    } 
    if(req.url === "/prod"){
        let num1 = parseFloat(res.write('Enter first number: '));
        let num2 = parseFloat(res.write('Enter second number: '));
        let num = msg.mul(num1, num2);
        res.write(num);
        res.end();
    }
    if(req.url === "/add"){
        let num = msg.sum(3, 7);
        res.write(num);
        res.end();
    }
    if(req.url === "/sub"){
        let num = msg.diff(3, 7);
        res.write(num);
        res.end();
    }
    if(req.url === "/div"){
        let num = msg.divide(3, 7);
        res.write(num);
        res.end();
    } 
});

server.listen(3000);
