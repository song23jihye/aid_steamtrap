var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("익스프레스 테스트");
});

app.listen(3000, (req, res) => {
    console.log("서버 실행중..");
});