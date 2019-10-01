const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')

const {sequelize, bitcoin} = require('./database/connection')

const app = express();

app.use(bodyParser.json());

const server = app.listen(3001, function(){
    console.log("Express server has started on port 3000")
})


// ?currency_pair=btc_krw


sequelize.sync({force:true});


app.get(`/coin`, function(req, res){


    console.log('in')

    request(`https://api.korbit.co.kr/v1/ticker/detailed?currency_pair=btc_krw`, function (error, response, body) {

        obj = JSON.parse(body);
        const data = new Date(obj.timestamp);
        dataSend2 = {
            "version": "2.0",
            "data": {
                "last" : "현재가 : " + obj.last.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') + "원",
                "high" : "최근 24시간 최고가 : " + obj.high.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') + "원",
                "low" : "최근 24시간 최저가 : " + obj.low.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') + "원",
                "bid" : "매수 호가 : " + obj.bid.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') + "원",
                "ask" : "매도 호가 : " + obj.ask.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') + "원",
                "timestamp" : "최종 체결 시각 : " + data
            }
        }

        bitcoin.create({
            last: obj.last,
            high: obj.high,
            low: obj.low,
            bid: obj.bid,
            ask: obj.ask,
            timestamp: obj.timestamp,
        }).then(() => {
            console.log('성공');
        }).catch((err) => {
            console.log(err)
        });


        res.send(dataSend2)


    });




});

