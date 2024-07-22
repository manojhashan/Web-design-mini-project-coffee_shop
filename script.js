gsap.from('.home .coffeecup1',{opacity:0, duration:1.5, delay:1.5, y:50})
gsap.from('.home .coffeecup2',{opacity:0, duration:1.5, delay:1.5, y:50})

const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

const textArray = ["COFFEE HOUSE", "Worlds Finest Coffee",];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//visitors count start

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

//Login page

const lcontainer = document.getElementById('lcontainer');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    lcontainer.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    lcontainer.classList.remove("active");
});

