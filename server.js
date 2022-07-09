const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    let pathing = ''
    let statscode = 200 
    switch(req.url){
        case '/':
            case '/index':
            pathing = path.join(__dirname,'/files/index.html')
            break;

        case '/about':
            pathing = path.join(__dirname,'files/about.html');
            break;
        case '/contact-me':
            pathing = path.join(__dirname,'files/contact-me.html');
            break;
        default:
            pathing = path.join(__dirname,'/files/404.html');    
            statscode = 404;
    }

    fs.readFile(pathing,(err,data)=>{
        if (err) throw err
        res.writeHead(statscode,{'content-type':'text/html'})
        res.write(data);
        res.end();
    })

})

server.listen(3000,()=>{
    console.log('The server is Listening on the port 3000');
});