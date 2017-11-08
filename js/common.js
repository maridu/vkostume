// Скрытие мобильного меню при клике на ссылку
var menuLinks = document.querySelectorAll('.nav__link');

for (var i = 0; i < menuLinks.length; i++) {
  var menuLink = menuLinks[i];
  var menuToggle = document.querySelector('#main-nav__toggle');
  menuLink.addEventListener('click', function() {
    menuToggle.checked = false;
  });
}

// Таймер
function setTimer(year, month, day) {
  setInterval(function() {
    var daysFields = document.querySelectorAll('.timer__time--days'),
        hoursFields = document.querySelectorAll('.timer__time--hours'),
        minFields = document.querySelectorAll('.timer__time--min'),
        secFields = document.querySelectorAll('.timer__time--sec'),
        dateNow = new Date().getTime(),
        dateEnd = new Date(year, month, day),
        totalSecLeft = Math.floor((dateEnd - dateNow) / 1000),
        daysLeft = Math.floor(totalSecLeft / 86400),
        hoursLeft = Math.floor((totalSecLeft - daysLeft * 86400) / 3600),
        minLeft = Math.floor((totalSecLeft - daysLeft * 86400 - hoursLeft * 3600) / 60),
        secLeft = totalSecLeft - daysLeft * 86400 - hoursLeft * 3600 - minLeft * 60;
    for (var i = 0; i < daysFields.length; i++) {
      if (daysLeft < 10) {
        daysFields[i].innerHTML = '0' + daysLeft;
      } else {
        daysFields[i].innerHTML = daysLeft;
      }
    }
    for (var i = 0; i < hoursFields.length; i++) {
      if (hoursLeft < 10) {
        hoursFields[i].innerHTML = '0' + hoursLeft;
      } else {
        hoursFields[i].innerHTML = hoursLeft;
      }
    }
    for (var i = 0; i < minFields.length; i++) {
      if (minLeft < 10) {
        minFields[i].innerHTML = '0' + minLeft;
      } else {
        minFields[i].innerHTML = minLeft;
      }
    }
    for (var i = 0; i < secFields.length; i++) {
      if (secLeft < 10) {
        secFields[i].innerHTML = '0' + secLeft;
      } else {
        secFields[i].innerHTML = secLeft;
      } 
    }
  }, 1000);
}

setTimer(2017, 11, 01);

// Карусель
var slider = document.querySelector('.comments__list'),
    slides = document.querySelectorAll('.comments__item'),
    prevButton = document.querySelector('.comments__btn--prev'),
    nextButton = document.querySelector('.comments__btn--next'),
    position = 0;


prevButton.addEventListener('click', function() {
  if (position < 0) {
    position += 100;
  }
  var moveRight = 'translateX' + '\(' + position + '%\)';
  slider.style.transform = moveRight;
  slider.style.transition = 'transform 0.6s ease-in-out';
  console.log(position);
});


nextButton.addEventListener('click', function() {
  if (position > (-(slides.length - 1)*100)) {
    position -= 100;
  }
  var moveLeft = 'translateX' + '\(' + position + '%\)';
  slider.style.transform = moveLeft;
  slider.style.transition = 'transform 0.6s ease-in-out';

});
