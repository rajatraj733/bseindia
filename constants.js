
var consts = {};
consts.bseMapping = [
    ['M&M', '500520'], ['YESBANK', '532648'], ['HINDUNILVR', '500696'], ['WIPRO', '507685'], ['TECHM', '532755']
    , ['HCLTECH', '532281'], ['AUROPHARMA', '524804'], ['UPL', '512070'], ['ZEEL', '505537'], ['BHARTIARTL', '532454']
    , ['SBIN', '500112'], ['INFRATEL', '534816'], ['BOSCHLTD', '500530'], ['INDUSINDBK', '532187'], ['ICICIBANK', '532174']
    , ['RELIANCE', '500325'], ['AXISBANK', '532215'], ['INFY', '500209'], ['HDFCBANK', '500180'], ['LT', '500510']
    , ['POWERGRID', '532898'], ['HINDALCO', '500440'], ['DRREDDY', '500124'], ['TCS', '532540'], ['BAJAJ-AUTO', '532977']
    , ['TATASTEEL', '500470'], ['ITC', '500875'], ['CIPLA', '500087'], ['HDFC', '500180'], ['MARUTI', '532500']
    , ['ONGC', '500312'], ['LUPIN', '500257'], ['HINDPETRO', '500104'], ['VEDL', '500295'], ['BAJFINANCE', '500034']
    , ['GAIL', '532155'], ['EICHERMOT', '505200'], ['KOTAKBANK', '500247'], ['IBULHSGFIN', '535789'], ['SUNPHARMA', '524715']
    , ['AMBUJACEM', '500425'], ['HEROMOTOCO', '500182'], ['ADANIPORTS', '532921'], ['NTPC', '532555'], ['ASIANPAINT', '500820']
    , ['BPCL', '500547'], ['ULTRACEMCO', '532538'], ['TATAMOTORS', '500570'], ['IOC', '530965'], ['COALINDIA', '533278']

];
consts.redis = {};
consts.redis.url = 'localhost';
consts.redis.port = 6379;
consts.timeInverval = 240000;

consts.url = 'https://www.bseindia.com/BSEGraph/Graphs/GetStockReachVolPriceDatav1.aspx?index=';

module.exports = consts;
