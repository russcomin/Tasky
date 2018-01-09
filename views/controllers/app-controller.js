let user_pic,
	user_getImage;

let user_name,
	u_name;

let job_title,
	j_title;

	user_pic = document.getElementById('user-image');
	user_getImage = 'url(' + localStorage['profile_image'] + ')';

	user_pic.style.backgroundImage = user_getImage;

	user_name = localStorage['username'];
	u_name = document.getElementById('u-name').innerHTML = user_name;

	job_title = localStorage['jobTitle'];
	j_title = document.getElementById('j-title').innerHTML = job_title;	


	this.settings = document.getElementById('settings');
	this.settings.addEventListener('click', openSettings);
		function openSettings(){ document.location = "settings.html" }

