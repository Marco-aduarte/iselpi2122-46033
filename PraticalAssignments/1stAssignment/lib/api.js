'use strict';

const fetch = require('node-fetch');

const CLIENT_ID = process.env.ATLAS_CLIENT_ID;


function getAllData(url){
    return fetch(url).then(res => res.text()).then(body => JSON.parse(body));
}


getAllData('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id='+CLIENT_ID).then(str => console.log(str));
