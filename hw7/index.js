'use strict'

const lastfm = require('./lastfm')

lastfm
    .tracksOfTopArtist('australia').then(arr => console.log(arr))

/*lastfm
    .getTopTracks('Radiohead')
    .then(arr => console.log(arr.slice(0,5)))

lastfm
    .getTopArtists('australia')
    .then(arr => console.log(arr.slice(0,5)))

*/
