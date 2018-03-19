
const axios = require('axios');
const consts = require('./constants');


const redis = require('redis');

var redisClient = redis.createClient({
    host: consts.redis.url, port: consts.redis.port
});
redisClient.on('ready', function (response) {
    console.log('client ready');

    function getData() {
        let urls = [];

        for(const stock of consts.bseMapping) {
            let url = consts.url+stock[1];
            urls.push(axios.get(url));
        }
        axios.all(
            urls
        ).then(axios.spread(function(... responses) {
            let i = 0;
            let stocks = [];
            for(const response of responses) {
                let stock = getStock(response.data, consts.bseMapping[i][0]);
                stocks.push(stock);
                i++;
            }
            // console.log(stocks);
            const stockString = JSON.stringify(stocks);
            console.log(stockString);
            redisClient.set('stocks', stockString);
            console.log(new Date()+' stocks pushed to redis');
        })).catch(function(error) {
            console.error(error);
        })
    }
    getData();
    setInterval(getData, consts.timeInverval);
    return;

});
redisClient.on('error', function (error) {
    console.log('error in redis');
    console.log(error);
})


function getStock(data, ticker) {
    let index = data.indexOf(ticker);
    data = data.substring(index);
    index = data.indexOf(',');
    data = data.substring(index+1);
    index = data.indexOf(',');
    data = data.substring(0, index);
    var stock = {
        ticker: ticker, price: data
    };
    return stock;
}



// console.log(urls);



