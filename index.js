const http =require('http');
const fs = require('fs');
const express = require('express');

const port = 2020;
const handle = (fileName, statusCode, req, res) =>{
    fs.readFile(fileName,"utf-8",(eer,data) =>{
        if(eer){
            console.log(eer)
        }else{
            res.writeHead(200,{
                "content-type":"Text/html"});
                res.write(data);
                res.end();
        };
      });
};


const myService = http.createServer((req,res) =>{
   if(req.url === "/"){
    handle("index.html",200,req,res);
   
   
   }else if(req.url === "/about"){
    handle("about.html",200,req,res);
   }else if(req.url === "/contact"){
    handle("contact.html",200,req,res);
   }else if(req.url === "/service"){
    handle("service.html",200,req,res);
   }
   else{
    handle("404.html",404,req,res);
   }

});

myService.listen(port, ()=>{
    console.log(`Server is running`);
})