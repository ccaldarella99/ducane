
let list = ['home', 'peak', 'hut', 'contact-us'];
let listLength = list.length;

function loadContent(name) {
	for (var i=0; i<listLength; i++) {
		if(list[i] == name) {
			//console.log("SHOW: " + list[i] + " ( name: " + name + ")")
			document.getElementById(list[i]).classList.remove('hide-content');
		} else {
			//console.log("HIDE: " + list[i] + " ( name: " + name + ")")
			document.getElementById(list[i]).classList.add('hide-content');
		}
	}
	closeOverlay();
}

function toggleContent(name) {

}

function closeOverlay() {
	$(document).ready(function(){
		$('.icon').toggleClass('active');
		$('#menu-bg').toggleClass('hide-menu-items');
		$('#overlay').toggleClass('hide-menu');
	})
}
