const express = require('express');
const app = express();

/* ------------ midelware ----------- */

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* ------------- verbos ------------- */

app.get('/api/whoami',(req,res)=>{
   
    //console.log(req.headers);

    res.send({
        ipaddress:req.socket.remoteAddress,
        language:req.headers["accept-language"],
        software:req.headers['user-agent']
    });
});


/* ------------ listener ------------ */

const port = 8080;
const server = app.listen(port,()=>{console.log('server running at port'+port)});
server.on('error',(error)=>{console.log('ocurrio un error'+error)});