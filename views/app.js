// configuration

let loggedU = localStorage.getItem('logged');
    if (loggedU == true) {
        document.location = "app.html";
    }

let ERRORS,
    username_error,
    password_error;

    username_error = "Error! You need to enter full name in order to complete registration";
    username_error = "Error! You need to enter valid password in order to complete registration";
    general_error = "Error! Looks like you forgot to enter username and password ";

document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        getInfo();
    }
})

let triggerButton,
    closeButton,
    errorText,
    err;

let WFAUT0 = false;

    err = document.getElementById('err-box');

    triggerButton = document.getElementById('next-button');
    triggerButton.addEventListener('click',
                            getInfo);

    errorText = document.getElementById('error-text');


    function authErr() {
        err.style.top = '0px';
        err.style.transition = '.4s';
    }

    function authErrClose() {
        setTimeout(function(){
            err.style.top = '-60px';
            err.style.transition = '.4s';    
        },500)
    }

    closeButton = document.getElementById('closeError');
    closeButton.addEventListener('click', authErrClose);

    function getInfo() {
        let username, password;
     
        username = document.getElementById('username').value;
        password = document.getElementById('password').value;

        
        if(username.length > 6 && password.length > 6) { WFAUT0 = true; }

        if(WFAUT0){
            this.saveUsername = localStorage.setItem('username', username);
            this.savePassword = localStorage.setItem('password', password);
            document.location = "index_vol_2.html";
        }else {
            authErr();
        }
    }