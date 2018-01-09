function deleteAccount() {
	let verify_password,
		real_password;
	
		real_password = localStorage['password'];
		verify_password = document.getElementById('verify').value;

	if (real_password == verify_password) {
		localStorage.clear();
		document.location = "index.html";
	}
}

function openModal() {
	let modal,
		modalW;

		setTimeout(function(){
			modal = document.getElementById('modal-box');
			modalW = document.getElementById('modal-window');

			modal.style.top = '200px';
			modal.style.transition = '1.4s';
			modalW.style.top = '0px';
		},500);

}

function closeModal() {
	let modal,
		modalW;

			setTimeout(function(){
				modal = document.getElementById('modal-box');
				modalW = document.getElementById('modal-window');

				modal.style.top = '-300px';
				modal.style.transition = '.7s';
				modalW.style.top = '-720px';
			},300);	
}

this.verify = document.getElementById('verify_button');
this.verify.addEventListener('click', deleteAccount);

this.modalC = document.getElementById('closeModal');
this.modalC.addEventListener('click', closeModal);

this.dashboard = document.getElementById('dashboard');
this.dashboard.addEventListener('click', function(){
	document.location = "app.html";
});

let del_button = document.getElementsByClassName('delete-button')[0];
	del_button.addEventListener('click', function(){
	openModal();
});

let changer = document.getElementById('save_changes');
	changer.addEventListener('click', save_changes);

	function save_changes() {
		let newUsername = document.getElementById('username').value,
			newPassword = document.getElementById('password').value;
		
			if (newPassword.length < 6 || newUsername.length < 6) {
				authErr();
				return false;
			}

		let save_user,
			save_pass;

		save_user = localStorage.setItem('username', newUsername);		
		save_pass = localStorage.setItem('password', newPassword);		
		location.reload();
	}

function authErrClose() {
    setTimeout(function(){
        err.style.top = '-60px';
        err.style.transition = '.4s';    
    },500)
}

function authErr() {
    err.style.top = '0px';
    err.style.transition = '.4s';
}

let err = document.getElementById('err-box');

closeButton = document.getElementById('closeError');
closeButton.addEventListener('click', authErrClose);


	//	background: #3498db; #2483c3
 