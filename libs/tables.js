const colors = require('colors')
const Table = require('cli-table2')

function generatePricePerCoinTable(coinData){
    var table = new Table({
        head: ['Source', {hAlign:'center',content:'Price (USD)'}, {hAlign:'center',content:'High'}, {hAlign:'center',content:'Low'}]
    });

    for(var i = 0; i < coinData.length; i++) {

        var coin = coinData[i];

            row = [];

        if(coin.error != ""){
            //row = [coin.source, {colSpan:3,content:coin.error}];

        }else{
            row = [coin.source, {hAlign:'right',content:'$' + coin.currentPrice}, {hAlign:'right',content:'$' + coin.high}, {hAlign:'right',content:'$' + coin.low}];
            table.push(row);
        }

    }

    if(table.length == 0){
        row = [{colSpan:4,content:'No data found for ' + coinData[0].symbol}];
        table.push(row);
    }

    return table;
}

function generateMarketDataTable(coinMarketData){

    var table = new Table({
        head: ['Rank', 'Name', 'Symbol', {hAlign:'center',content:'Price (USD)'}, {hAlign:'center',content:'Market Cap (USD)'},  {hAlign:'center',content:'Change (24h)'}]
    });

    for(var i = 0; i < coinMarketData.length; i++) {

        var coin = coinMarketData[i];

        if (coin.percentChange24h >= 0){
            row = [coin.rank,coin.name,coin.symbol, {hAlign:'right',content:'$' + coin.price}, {hAlign:'right',content:'$' + coin.marketCap}, {hAlign:'right', content: coin.percentChange24h + '%'}];
        }else{
            row = [coin.rank,coin.name,coin.symbol, {hAlign:'right',content:'$' + coin.price}, {hAlign:'right',content:'$' + coin.marketCap},{hAlign:'right', content: coin.percentChange24h + '%'}];

        }

    
        table.push(row);

    }

    return table;
}

module.exports.generatePricePerCoinTable = generatePricePerCoinTable;
module.exports.generateMarketDataTable = generateMarketDataTable;