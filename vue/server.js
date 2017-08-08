/**
 * Created by heben.hb on 2017/7/30.
 */

let http = require("http");
let fs = require("fs");
let url = require("url");

const server = http.createServer((request,response)=>{
    let pathname=url.parse(request.url).pathname;
    console.log(pathname);
    pathname = pathname.slice(1);
    console.log("slice",pathname);
    if(/^api/.test(pathname)){
        console.log("api enter ");
        let testData = {data:["list1","list2","list3"]};
        response.end(JSON.stringify(testData));
    }else if(!/.js|.css$/.test(pathname)){
        fs.readFile('./vue.html',(err,data)=>{
            if(err) console.log("res err ",err);
            else response.end(data);
        });
    }else{
        fs.exists(pathname,(exist)=>{
            console.log(exist);
            if(exist){
                fs.readFile(pathname,(err,data)=>{
                    response.end(data)
                });
            }else{
                response.writeHead(404,'file is not exist',{"Content-Type":'text/html'});
                response.end("<h1>404 Not Found</h1>");
            }
        });
    }
});
server.listen(3000);