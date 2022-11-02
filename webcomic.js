let pagenumber = 1;
let pageamount = 150;

function goright() {
	if (pagenumber < pageamount) {
	pagenumber += 1;
	document.getElementById("image").src = "pages/"+pagenumber.toString()+".png";
	settext();
	}
	
}

function goleft() {
	if (pagenumber > 1) {
	pagenumber -= 1;
	document.getElementById("image").src = "pages/"+pagenumber.toString()+".png";
	settext();
	}
}

function gofirst() {
	pagenumber = 1;
	document.getElementById("image").src = "pages/"+pagenumber.toString()+".png";
	settext();
}

function golast() {
	pagenumber = pageamount
	document.getElementById("image").src = "pages/"+pagenumber.toString()+".png";
	settext();
}

function settext() {
	document.getElementById("pagedate").innerHTML = "Page " + pagenumber;
}

function getnumber() {
	if (parseInt(document.getElementById('pagenum').value) <= pageamount) {
		if (parseInt(document.getElementById('pagenum').value) > 0) {
			pagenumber = parseInt(document.getElementById('pagenum').value);
			document.getElementById("image").src = "pages/"+pagenumber.toString()+".png";
			settext();
		}
	}
}

window.onload = function() {
	settext();
};

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
	if (charCode == 97) {
		goleft();
	}
	if (charCode == 100) {
		goright();
	}
};
