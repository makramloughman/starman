const button = document.querySelector('.under_load');
button.addEventListener('click',actionClicked);

var counter = 0;

function actionClicked(event) {
  init();
  if (counter == 0) {
    gameLoop();
    counter += 1;
  }
  else {
    if (end.textContent == 'GAME OVER' || win.textContent == 'YOU WON!' || exit.textContent == 'GAME EXITED') {
      end.textContent = '';
      win.textContent = '';
      exit.textContent = '';
      gameLoop();
    }
  }
}
