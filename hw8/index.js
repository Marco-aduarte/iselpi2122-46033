'use strict'

const fetch = require('node-fetch')

/**
 * @param {String} url Path to make the HTTP request
 * @returns {Promise.<Number>} The size of the body response
 */
function getBodySize(url) {
    return fetch(url)              // Promise<Response>
        .then(res => res.text())   // Promise<Promise<String>>
        .then(body => body.length) // Promise<Number>
}



const urls = {
    'github': 'https://github.com/',
    'MDN': 'https://developer.mozilla.org/en-US/',
    'stackoverflow': 'https://stackoverflow.com/'
}


console.log(sumBodiesSizes(urls))


/*let sum = 0;
console.log(Object
    .values(urls)
    .forEach(url => {
        getBodySize(url).then(size => sum+=size).then(s => s)
    }))
  */  



/**
 * 
 * @param  {...any} urls 
 * @returns {Promise<Number>} the sum of the response bodies' lengths for given urls
 */
function sumBodiesSizes(...urls){
    let sum = 0;
    Object
        .values(urls[0])
        .forEach(url => 
            getBodySize(url)
                .then(size => 
                    sum += size
                )
            )
}