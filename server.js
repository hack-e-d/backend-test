const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(request,response) => {
    response.status(200).send({'Message' : 'Hello world!'});
});

app.get("/health-check",(request, response) =>{
    response.status(200).send({'STATUS' : 'OK'});
});

app.post("/data", (request,response) =>{
    if(request.body.name){
        console.log(request.body);
        response.status(200).send(request.body);
    }else {
        console.error("Request body empty");
        response.status(204).send({'Message' : 'Request body empty'});
    }    
});

app.listen(3000,() => console.log("Server listening at port 3000"));