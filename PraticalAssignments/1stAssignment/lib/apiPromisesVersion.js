'use strict';

const fetch = require('node-fetch');
const fs = require('fs/promises');
const utils = require('./index.js');

const CLIENT_ID = `&client_id=${process.env.ATLAS_CLIENT_ID}`;
const URL = `https://api.boardgameatlas.com/api/search?ids=`;
const FILE_NAME = 'text.txt';
const RESULT_FILENAME = 'resPromises.json'

module.exports = {
	readFile
};

/**
 * Read all ids from a .txt file
 * @param {String} filename 
 * @returns array with all ids
 */
function readFile(filename){
    return fs.readFile(filename).then(data => 
        {
            return data.toString().split('\r')
        });
}

/**
 * Write object in file
 * @param {Object} obj 
 */
function writeFile(obj) {
    fs.writeFile(RESULT_FILENAME, JSON.stringify(obj))
}

/**
 * Get 'name' and 'url' properties from games whose id was specified in the file .txt
 * @param {String} id 
 * @returns Promises<object> with all games with the id specified in the file .txt
 */
function getGameProperties(id) {
    return fetch(URL + id + CLIENT_ID)
        .then(res => res.json())
        .then(data => data.games[0])
        .then(game => utils.filterProperties(['name', 'url'], game));
}

readFile(FILE_NAME)
    .then(ids => ids.map(id => getGameProperties(id)))
    .then(obj => Promise.all(obj))
    .then(writeFile);
