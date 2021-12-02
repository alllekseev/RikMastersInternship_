// -------------- Моя реализация -----------------------

let buttons = [...document.querySelectorAll('.main__service__button')];
let blocks = document.querySelectorAll('.main__service__description')

buttons.forEach((item) => {
    item.addEventListener('click', () => {
      let elem = buttons.indexOf(item);
      let two = elem + 1;
      let block = blocks[elem];
      if(window.matchMedia("(max-width: 639px)").matches) {

        buttons[elem].after(block);

        if((block === block) && block.classList.contains('active')) {
          block.classList.remove('active')
        } else {
          removeActiveClass();
          block.classList.add('active');
        }

      } else if (window.matchMedia("(max-width: 879px)").matches) {

        if (buttons.indexOf(item) % 2 === 0) {
          buttons[two].after(block);
        } else {
          buttons[elem].after(block);
        }

        if((block === block) && block.classList.contains('active')) {
          block.classList.remove('active')
        } else {
          removeActiveClass();
          block.classList.add('active');
        }

      } else {

        if((block === block) && block.classList.contains('active')) {
          block.classList.remove('active')
        } else {
          removeActiveClass();
          block.classList.add('active');
        }
      }
    });
  });

function removeActiveClass() {
  blocks.forEach((block) => {
    block.classList.remove('active')
  })
}

