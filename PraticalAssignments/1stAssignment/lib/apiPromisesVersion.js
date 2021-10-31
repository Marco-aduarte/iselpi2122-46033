'use strict';

const fetch = require('node-fetch');
const fs = require('fs/promises');
const URL = 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=';
const CLIENT_ID = process.env.ATLAS_CLIENT_ID;
const FILE_NAME = 'text.txt';
const RESULT_FILE_NAME = 'res.json'

module.exports = {
	readFile
};


function getAllGames(url) {
    return fetch(url)
        .then(res =>
            res.text())
                .then(body =>
                    JSON.parse(body))
                        .then(obj => obj.games);
}


//TODO: O BUFFER É DE BYTES
function readFile(){
    return fs.readFile(FILE_NAME);
}


let json = Array();

/**
 * 
 * @param {Object} game 
 */
function filter(game){
    json.push({
        "name" : game.name,
        "url" : game.url
    })
}


/**
 * Get all game info from id
 * @param {Array<object>} games 
 * @param {String} id 
 */
function searchFromId(id){
    return getAllGames(URL + CLIENT_ID)
        .then(games => 
            games.forEach(game =>{ game.id == id ? filter(game) : null })
        )
}

searchFromId('RLlDWHh7hR').then(() => fs.writeFile(RESULT_FILE_NAME, json));

