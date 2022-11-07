
var QuestionForm = document.querySelector('.contact__post');
var TroubleForm = document.querySelector('.contact__post2');
var OrderForm = document.querySelector('.contact__post3');

const formDisplay = {
    addEventListener() {
        document.querySelector('#FormChoice-Question').onclick = () => {
            QuestionForm.classList.remove('contact-post-hidden'),
                TroubleForm.classList.add('contact-post-hidden'),
                OrderForm.classList.add('contact-post-hidden')
        };
        document.querySelector('#FormChoice-Trouble').onclick = () => {
            QuestionForm.classList.add('contact-post-hidden'),
                TroubleForm.classList.remove('contact-post-hidden'),
                OrderForm.classList.add('contact-post-hidden')
        };
        document.querySelector('#FormChoice-Order').onclick = () => {
            QuestionForm.classList.add('contact-post-hidden'),
                TroubleForm.classList.add('contact-post-hidden'),
                OrderForm.classList.remove('contact-post-hidden')
        }
    }
}

formDisplay.addEventListener();

// nav box

var btnContainer = document.getElementById("pageNavigation-list-forms");
var btns = btnContainer.getElementsByClassName("pageNavigation-item-forms");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("menu__list-item-forms_active");
        current[0].className = current[0].className.replace(" menu__list-item-forms_active", "");
        this.className += " menu__list-item-forms_active";
    });
}


