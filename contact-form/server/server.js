var restify = require('restify');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var corsMiddleware = require('restify-cors-middleware');

var cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']

})

var server = restify.createServer();

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));

server.use(restify.plugins.fullResponse());

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'malaxov.grisha',
        pass: '76870303a@'
    }
});

server.post('/api/email', function create(req, res, nest) {
    var mail = {
        from: req.params.email,
        to: "malax777@yandex.ru",
        subject:"Test",
        html: "name: <br/>" + req.params.nom + "<br/> Message: <br/>" + req.params.message + "<br/> email <br/>" + req.params.email,

    }
    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log("Email sending error!");
            console.log(error);
        }else{
            console.log("Success!")
        }
        smtpTransport.close();
    });

    res.send(201, req.params);
});