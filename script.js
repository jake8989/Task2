'use strict';
var countDownDate = new Date('20june, 2022 20:54:00').getTime();
const btnTimer = document.getElementById('btn-timer');
const contactBtn = document.getElementById('cbtn');
const footer = document.getElementById('footer');

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML =
    days + 'd :' + hours + 'h :' + minutes + 'm :' + seconds + 's ';

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = 'Sell Ended!!!';
    document.getElementById('timer').style.color = 'red';
    // btnTimer.style.display = 'none';
  }
}, 1000);
contactBtn.addEventListener('click', function () {
  footer.scrollIntoView({ behavior: 'smooth' });
});
btnTimer.addEventListener('click', function () {
  if ((document.getElementById('timer').innerHTML = 'Sell Ended!!!')) {
    alert('Sale ended!!!');
  }
});
