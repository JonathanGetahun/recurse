const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 4000;


let storage = [];

const server = http.createServer((req,res) => {
    const { url }=req;
    current_url = new URL(`http://${hostname}:${port}${url}`);
    const keyValuePairs = current_url.searchParams.entries();
    for (const [key,value] of keyValuePairs){
        
    }
    res.end(url)
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})


