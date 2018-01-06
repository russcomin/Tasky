let Name,
	Password,
	Description,
	ProfilePicture,
	JobTitle;

	Name = localStorage.getItem('username');
	Password = localStorage.getItem('password');
	ProfilePicture = localStorage.getItem('profile_image');
	JobTitle = localStorage.getItem('jobTitle');
	Description = localStorage.getItem('description');

	if (Name || Password || ProfilePicture || JobTitle || Description) {
		document.location = "app.html";
	}