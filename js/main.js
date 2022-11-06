const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // delete btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // add btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // прокрутка
    window.addEventListener('scroll', () => {
      // сколько
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // видима если
      scrollY > 400 ? this.show() : this.hide();
    });
    // нажатие .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // в начало
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// Header link position

var btnContainer = document.getElementById("headerLinkContainer");
var btns = btnContainer.getElementsByClassName("menu__list-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("menu__list-item_active");
    current[0].className = current[0].className.replace(" menu__list-item_active", "");
    this.className += " menu__list-item_active";
  });
}

// picture frame 

const PicFrame = {
  el: document.querySelector('.pictureFrame'),
  show() {
    this.el.classList.remove('pictureFrame-hide');
  },
  hide() {
    this.el.classList.add('pictureFrame-hide');
  },
  addEventListener() {
    document.querySelector('#serving-post__icon1').onclick = () => {
      this.show(),
      $('body').addClass('stop-scrolling')
    };
    document.querySelector('#serving-post__icon2').onclick = () => {
      this.show(),
      $('body').addClass('stop-scrolling')
    };
    document.querySelector('#serving-post__icon3').onclick = () => {
      this.show(),
      $('body').addClass('stop-scrolling')
    };
    document.querySelector('#serving-post__icon4').onclick = () => {
      this.show(),
      $('body').addClass('stop-scrolling')
    };
    document.querySelector('#serving-post__icon5').onclick = () => {
      this.show(),
      $('body').addClass('stop-scrolling')
    };
    document.querySelector('#serving-post__icon6').onclick = () => {
      this.show(),
      $('body').addClass('stop-scrolling')
    };
    document.querySelector('.pictureFrame-button').onclick = () => {
      this.hide(),
      $('body').removeClass('stop-scrolling')
    }
  }

}

PicFrame.addEventListener();

