document.addEventListener("DOMContentLoaded", function() {
    // Выберите секцию
    const section = document.querySelector(".first__page__logo");
  const body = document.querySelector("body");
  const mainElem = document.querySelector("main");
  const image_1 = document.querySelector("page2"); 
  const image_2 = document.querySelector("page3");
  const image_3 = document.querySelector("page4");
  const image_4 = document.querySelector("page5");


  const btn1 = document.querySelector("btn1");
  const btn2 = document.querySelector("btn2");
  const btn3 = document.querySelector("btn3");
  const btn4 = document.querySelector("btn4");

 const showLinks = document.querySelectorAll('.showLink');
 showLinks.forEach(function (showLink) {
  showLink.addEventListener('click', function (event) {
      event.preventDefault();

      // Получаем идентификатор элемента, который нужно скрыть/показать
      const targetId = showLink.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          toggleElementVisibility(targetElement);
      }
  });





  
});

function toggleElementVisibility(element) {
  if (element.hidden) {
      element.removeAttribute('hidden');
  } else {
      element.setAttribute('hidden', 'true');
  }
}
    // Функция для скрытия секции с анимацией
    function hideSection() {
      section.classList.add("hidden");
     
    }
    function removeSection() {
        section.remove();
        body.style.backgroundColor = "#A8A4A4";
        unHiddenMain();
      }
    function unHiddenMain(){
        mainElem.classList.add("unhidden");
    }
      function unHiddenMain(){
        mainElem.classList.add("unhidden");
    }
    // Вызовите функцию после задержки в 2 секунды
    setTimeout(hideSection, 2000); // 2000 миллисекунд (2 секунды)
    setTimeout(removeSection, 3000); // 2000 миллисекунд (2 секунды)
  });