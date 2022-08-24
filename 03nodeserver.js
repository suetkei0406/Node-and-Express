//import http package from node runtime
let httpRef = require('http')

//server has to deal with request and response as parameters
//request is incoming
//response is outgoing
const myCallBackFunction=(request, response)=>{
    console.log("request received")
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h1>Hello from node server. My very first server!</h1>")
    response.write("<h2>i can send multiple responses ONLY before end!!!!</h2>")
    console.log("response being sent")
    response.end()
}

//use httpRef variable to create a server
//use createServer to create the new http server
//createServer will use custom function called myCallBackFuntion 
//to implement the server

//myCallBackFunction is a function
let myFirstServer = httpRef.createServer(myCallBackFunction)



const PORT = 4000
//configure the port for the server to listen to the request
myFirstServer.listen(PORT)
