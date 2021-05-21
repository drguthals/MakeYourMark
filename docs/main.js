const core = require('@actions/core');
const github = require('@actions/github');
const fs = require( "fs" );
const path = require( "path" );

try {
  console.log( "Finding Constellations..." );

  let constellations = fs.readFileSync( path.join( __dirname, file ) );

  console.log( "Constellations contents:\n");
  console.log(constellations);

} catch (error) {
  core.setFailed(error.message);
}

// Requiring fs module in which
// readFile function is defined.
const fs = require('fs')
  
// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be 
// other character set also like 'ascii'
fs.readFile('initial-constellations.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
/*  
    let div = document.getElementById('universe');

    for (var i = 0; i < data.length; i++) {
        div.insertAdjacentHTML(
            'beforeend',
            '<iframe style="position:absolute;top:0;left:0;width:10%;height:10%;" src="' +
            data[i].url +
            ' allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe>'
        );
    }
    */
})

// Code came from https://www.geeksforgeeks.org/javascript-program-to-read-text-file/
