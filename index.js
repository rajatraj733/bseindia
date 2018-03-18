const express = require('express');
const redis = require('redis');

var redisClient = redis.createClient({
    host: , port: 6370
});
redisClient.on('ready', function (response) {
    console.log('client ready');
    var app = express();

    app.get('/', (req, res) => {
        redisClient.get('stocks', (err, result)=> {
            if(err) {
                console.error(err);
                return;
            }
            console.log('serving stocks');
            res.send(result);
        })
        // res.send('Hello World');
    });
    app.listen(8080);



});
redisClient.on('error', function (error) {
    console.log('error in redis');
    console.log(error);
})

// const app = express();

