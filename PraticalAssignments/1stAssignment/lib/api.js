'use strict';

const fetch = require('node-fetch');

const CLIENT_ID = process.env.ATLAS_CLIENT_ID;



function getAllGames(url){
    return fetch(url).then(res => res.text()).then(body => JSON.parse(body)).then(obj => obj.games);
}

function filter(propNames,obj){
    if(propNames.id == obj){
        return propNames;
    }
}

function getAllData(url){
    return fetch(url).then(res => res.text()).then(body => JSON.parse(body));
}

/**
 * 
 * @param {Array<object>} games 
 * @param {String} id 
 */
function searchFromId(games, id){
    return games.map(value => filter(value, id))
}

getAllGames('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id='+CLIENT_ID).then(games => console.log(searchFromId(games, 'RLlDWHh7hR')));
