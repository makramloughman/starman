window.addEventListener("load", showPage);

function showPage() {
  if (screen.width <= 1200) {
    var mobile = document.querySelector('.mobile');
    mobile.classList.add('activem');
    setTimeout(redirect, 20000);
    var par = mobile.querySelector('.p');
    var j = 20;
    for (var i = 0; i < 21; i++) {
      setTimeout(function(){par.innerHTML = `The device you are using to play Space Invaders is not compatible. Please access the website from a PC. <br> <br> You will be redirected to the GitHub page of the project in ${j--} seconds.`}, i*1000);
    }
  }
}

function redirect() {
  window.location.href = "https://github.com/makramloughman/starman";
}
