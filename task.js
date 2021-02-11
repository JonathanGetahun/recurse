const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;


let storage = {};

const server = http.createServer((req,res) => {
    const { url }=req;
    current_url = new URL(`http://${hostname}:${port}${url}`);
    const keyValuePairs = current_url.searchParams.entries();


    if(url.substring(1,4) === "set"){
        for (const [key,value] of keyValuePairs){
            storage[key] = value
        }
    } else if(url.substring(1,4) === "get"){
        
        for(const [key,somekey] of keyValuePairs){ 
            res.write(`${somekey}:${storage[somekey]}\n`)
        }
    } else {
        res.statusCode = 404
        res.end("please use a set or get request")
    }

    console.log(storage)
    res.end(url)
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})


