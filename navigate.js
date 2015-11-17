var headers = document.getElementsByTagName("h1");
var links = [];

for(var i=0; i<headers.length; i++) {
	var header = headers[i];
	var text = header.innerHTML;
	var id = header.id;
	// make new link
	var link = document.createElement("a");
	link.innerHTML = text; // give link text
	link.setAttribute("href", "#"+id); // give link href

	// add link to all links.
	links.push(link);
}

var nav_panel = document.createElement("div");
nav_panel.id = "nagivation_panel";
var bookmarks = document.createElement("ul");
nav_panel.appendChild(bookmarks);

for(var i=0; i<links.length; i++) {
	var link = links[i];
	// add link to nav bookmarks

	var item = document.createElement('li');
	item.appendChild(link);
 	bookmarks.appendChild(item);
}

// styling
nav_panel.setAttribute("style", "width: 150px; position: fixed; left: 0; float: left; background-color: lightblue; margin-left: -130px; transition: all 0.2s ease;"); 
bookmarks.setAttribute("style", "list-style-type: none;");

// transition
nav_panel.onmouseover = function() {
	nav_panel.style['margin-left'] = "0";
}

nav_panel.onmouseout = function() {
	nav_panel.style['margin-left'] = "-130px";
}

document.body.insertBefore(nav_panel, document.body.firstChild);