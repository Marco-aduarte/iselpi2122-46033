'use strict'

const fetch = require('node-fetch');
const fs = require('fs/promises');
const utils = require('./index.js');

const CLIENT_ID = `&client_id=${process.env.ATLAS_CLIENT_ID}`;
const URL = `https://api.boardgameatlas.com/api/search?ids=`;
const FILE_NAME = 'text.txt';
const RESULT_FILE_NAME = 'resAsync.json'

/**
 * Read all ids from a .txt file
 * @param {String} filename 
 * @returns array with all ids
 */
async function readFile(filename){
    const prm =  fs.readFile(filename);
    const data = await prm;
    const toReturn = data.toString().split('\r');
    return toReturn;
}

/**
 * Write object in file
 * @param {Object} obj  
 */
function writeFile(obj) {
    fs.writeFile(RESULT_FILE_NAME, JSON.stringify(obj))
}

/**
 * Get 'name' and 'url' properties from games whose id was specified in the file .txt
 * @param {String} id 
 * @returns Promises<object> with all games with the id specified in the file .txt
 */
async function getGameProperties(id) {
    const res = await fetch(URL + id + CLIENT_ID);
    const data = await res.json();
    const game = data.games[0];
    return utils.filterProperties(['name', 'url'], game);
}

/**
 * Function to handler errors
 */
function handlerFunction(err) {
    console.log(err);
}

/**
 * main function
 */
async function application(){
    try{
        const ids = await readFile(FILE_NAME);
        const obj = ids.map(id => getGameProperties(id));
        const prom = await Promise.all(obj);
        writeFile(prom);
    } catch(err) {
        handlerFunction(err);
    }
}

application();
