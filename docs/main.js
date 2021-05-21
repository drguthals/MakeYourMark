const core = require('@actions/core');
const github = require('@actions/github');
const fs = require( "fs" );
const path = require( "path" );

try {
  console.log( "Finding Constellations..." );

  let constellations = fs.readFileSync( path.join( __dirname, file ) );

  console.log( "Constellations contents:\n");
  console.log(constellations);

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

} catch (error) {
  core.setFailed(error.message);
}
