let data = fetch("./initial-constellations.json")
.then(response => {
   return response.json();
});

let div = document.getElementById('universe');

for (var i = 0; i < data.length; i++) {
	div.insertAdjacentHTML(
		'beforeend',
        '<iframe style="position:absolute;top:0;left:0;width:10%;height:10%;" src="' +
        data[i].url +
        ' allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe>'
	);
}