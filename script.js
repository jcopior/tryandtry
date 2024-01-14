const dynamicText = document.querySelector("h2 span");
const words = ["Jovan", "Frontend Dev", "College Student", "21 young"];

let wordIndex = 0;
let charIndex = 0;
let isRemove = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop.blinking");

    if(!isRemove && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 130);  
    } else if(isRemove && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 90);
    } else {
        isRemove = !isRemove;
        dynamicText.classList.remove("stop.blinking");
        wordIndex = !isRemove ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 900);
    }
}

typeEffect();