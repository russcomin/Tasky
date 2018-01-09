this.dashboard = document.getElementById('dashboard');
this.dashboard.addEventListener('click', function(){
	document.location = "app.html";
});

let del_button = document.getElementsByClassName('delete-button')[0];
	del_button.addEventListener('click', function(){
	localStorage.clear();
	document.location = "index.html";
});