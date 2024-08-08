const dorama1 = require('./1');
const dorama2 = require('./2');
const dorama3 = require('./3');
const dorama4 = require('./4');
const dorama5 = require('./5');
const dorama6 = require('./6');
const dorama7 = require('./7');
const dorama8 = require('./8');


const sendMovies = [
    dorama1.sendDorama,
    dorama2.sendDorama,
    dorama3.sendDorama,
    dorama4.sendDorama,
    dorama5.sendDorama,
    dorama6.sendDorama,
    dorama7.sendDorama,
    dorama8.sendDorama,
]

const swichMovies = [
    dorama1.swichDorama,
    dorama2.swichDorama,
    dorama3.swichDorama,
    dorama4.swichDorama,
    dorama5.swichDorama,
    dorama6.swichDorama,
    dorama7.swichDorama,
    dorama8.swichDorama,
]

module.exports =  {sendMovies, swichMovies};

