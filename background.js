
const axios = require('axios');
const consts = require('./constants');


const redis = require('redis');

var redisClient = redis.createClient({
    host: 'localhost', port: 6370
});
redisClient.on('ready', function (response) {
    console.log('client ready');
    var urls = [];

    for(const stock of consts.bseMapping) {
        var url = consts.url+stock[1];
        urls.push(axios.get(url));
    }
    function getData() {
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
            console.log('stocks added');
            // console.log(stocks);
            const stockString = JSON.stringify(stocks);
            redisClient.set('stocks', stockString);
        })).catch(function(error) {
            console.error(error);
        })
    }
    setInterval(getData, 1800000);
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



