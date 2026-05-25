// AOS
AOS.init({
  duration:1200
});

// OPEN INVITATION
function openInvitation(){

  document
  .getElementById('invitation')
  .scrollIntoView({
    behavior:'smooth'
  });

}

// COUNTDOWN

const targetDate =
new Date("Jun 05, 2026 08:00:00").getTime();

const timer =
setInterval(function(){

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days =
  Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
  Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60)
  );

  const minutes =
  Math.floor(
    (distance % (1000 * 60 * 60))
    /
    (1000 * 60)
  );

  const seconds =
  Math.floor(
    (distance % (1000 * 60))
    /
    1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute('href')
    );

    if(target){

      target.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });

    }

  });

});

// MUSIC

const music =
document.getElementById('bg-music');

const musicBtn =
document.getElementById('music-btn');

let isPlaying = false;

musicBtn.addEventListener('click', () => {

  if(isPlaying){

    music.pause();

    musicBtn.innerHTML = '🔇';

  }else{

    music.play();

    musicBtn.innerHTML = '🔊';

  }

  isPlaying = !isPlaying;

});

// AUTO PLAY MUSIC

window.addEventListener('load', async () => {

  const shouldPlay =
  localStorage.getItem('playMusic');

  if(shouldPlay === 'true'){

    try{

      await music.play();

      isPlaying = true;

      musicBtn.innerHTML = '🔊';

    }catch(err){

      console.log(
        'Autoplay diblok browser'
      );

    }

    localStorage.removeItem(
      'playMusic'
    );

  }

});

// COPY REKENING

function copyRekening(){

  const rekening =
  document.getElementById(
    'rekening-number'
  ).innerText;

  navigator.clipboard.writeText(
    rekening
  );

}

/* =========================
   AUTO SCROLL
========================= */

let autoScroll = true;

// KECEPATAN SCROLL
const scrollSpeed = 1;

// AUTO SCROLL FUNCTION
function startAutoScroll(){

  const auto = setInterval(() => {

    if(autoScroll){

      window.scrollBy(0, scrollSpeed);

    }

  }, 40);

}

// START
startAutoScroll();

/* =========================
   STOP SEMENTARA SAAT USER SCROLL
========================= */

let timeout;

window.addEventListener('wheel', () => {

  autoScroll = false;

  clearTimeout(timeout);

  timeout = setTimeout(() => {

    autoScroll = true;

  }, 3000);

});

/* =========================
   MOBILE TOUCH
========================= */

window.addEventListener('touchmove', () => {

  autoScroll = false;

  clearTimeout(timeout);

  timeout = setTimeout(() => {

    autoScroll = true;

  }, 3000);

});