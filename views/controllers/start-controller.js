document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        startAPP();
    }
});

let Name,
    ProfilePic;

    Name = localStorage.getItem('username');
    ProfilePic = 'url(' + localStorage['profile_image'] + ')';

let pageTitle = document.getElementById('Page-title').innerHTML = 'Hey, '+Name;
    
let ImagePreview = document.getElementById('image-holder');
    ImagePreview.style.backgroundImage = ProfilePic;

let infoName = document.getElementById('info-name').innerHTML = Name;

let triggerButton = document.getElementById('next-button');
    triggerButton.addEventListener('click',
                            startAPP);

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

function startAPP() {
    let jobtitle;
        jobtitle = document.getElementById('jobtitle').value;    
    if(jobtitle.length == 0 || jobtitle.length < 5) {        
        authErr();
    }else { 
        this.setJobTitle = localStorage.setItem("jobTitle", jobtitle);
        document.location = "app.html";
        authErrClose();
    }
}

closeButton = document.getElementById('closeError');
closeButton.addEventListener('click', authErrClose);