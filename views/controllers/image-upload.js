var input = document.getElementById('imger');
input.onchange = function(evt){
    var tgt = evt.target || window.event.srcElement, 
        files = tgt.files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            localStorage['profile_image'] = fr.result;
        }
        fr.readAsDataURL(files[0]);
        authErrClose();
        success();
    }
}

let problem = 0;

function authErrClose() {
    setTimeout(function(){
        err.style.top = '-60px';
        err.style.transition = '.4s';    
    },500)
}

function succClose() {
    setTimeout(function(){
        succ.style.top = '-60px';
        succ.style.transition = '.4s';    
    },500)
}

function success() {
    succ.style.top = '0px';
    succ.style.transition = '.4s';
}

function authErr() {
    err.style.top = '0px';
    err.style.transition = '.4s';
}

let err = document.getElementById('err-box');
let succ = document.getElementById('success-box');
let nextStep = document.getElementById('next-button').addEventListener('click', next_step);

function next_step() {
    let description = document.getElementById('description').value;
    let profile_image = localStorage.getItem('profile_image');
      if(!profile_image) {  
        authErr();
    }else {
        if(description.length > 20){
            this.setDesc = localStorage.setItem("description", description);
            document.location = "index_vol_3.html";
    }
}
}
closeButton = document.getElementById('closeError');
closeButton.addEventListener('click', authErrClose);
closeSuccess = document.getElementById('closeSuccess');
closeSuccess.addEventListener('click', succClose);
// 'url(' + localStorage['foo'] + ')';