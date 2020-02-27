
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("this is my new cool website");
        res.end();
    }

    if(req.url === '/books'){
        res.write(JSON.stringify(["a field guide to getting lost","lord of the rings","adjustment day"]));
        res.end();
    }
});

server.listen(8080);
console.log("server is on");