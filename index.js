
//index btn
const button = document.querySelector('.button');
    button.onmousemove = function (e) {
      const x = e.pageX - button.offsetLeft;
      const y = e.pageY - button.offsetTop;

      button.style.setProperty('--x', x + 'px');
      button.style.setProperty('--y', y + 'px');
    }

    const button1 = document.querySelector('.button1');
    button1.onmousemove = function (e) {
      const x = e.pageX - button1.offsetLeft;
      const y = e.pageY - button1.offsetTop;

      button1.style.setProperty('--x', x + 'px');
      button1.style.setProperty('--y', y + 'px');
    }


