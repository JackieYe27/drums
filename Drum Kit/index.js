document.querySelector('button').addEventListener('click', handleClick);
let buttons = document.querySelectorAll('.drum');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);
}



function handleClick() {
    let buttonHTML = this.innerHTML;
    switch (buttonHTML) {
        case 'w':
            let audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case 'a':
            let audio2 = new Audio('sounds/kick-bass.mp3')
            audio2.play();
            break;
        case 's':
            let audio3 = new Audio('sounds/snare.mp3')
            audio3.play();
            break;
        case 'd':
            let audio4 = new Audio('sounds/tom-2.mp3')
            audio4.play();
            break;
        case 'j':
            let audio5 = new Audio('sounds/tom-3.mp3')
            audio5.play();
            break;
        case 'k':
            let audio6 = new Audio('sounds/tom-4.mp3')
            audio6.play();
            break;
        case 'l':
            let audio7 = new Audio('sounds/tom-4.mp3')
            audio7.play();
            break;
        default:
            break;
    }
    let currentKey = document.querySelector('.' + buttonHTML);
    currentKey.classList.add('pressed');
    setTimeout(() => {
        currentKey.classList.remove('pressed');
    }, 200)
    
}

document.addEventListener('keydown', (e) => {
    let key = e.key;
    switch (key) {
        case 'w':
            let audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case 'a':
            let audio2 = new Audio('sounds/kick-bass.mp3')
            audio2.play();
            break;
        case 's':
            let audio3 = new Audio('sounds/snare.mp3')
            audio3.play();
            break;
        case 'd':
            let audio4 = new Audio('sounds/tom-2.mp3')
            audio4.play();
            break;
        case 'j':
            let audio5 = new Audio('sounds/tom-3.mp3')
            audio5.play();
            break;
        case 'k':
            let audio6 = new Audio('sounds/tom-4.mp3')
            audio6.play();
            break;
        case 'l':
            let audio7 = new Audio('sounds/tom-4.mp3')
            audio7.play();
            break;
        default:
            break;
    }
    let currentKey = document.querySelector('.' + key);
    currentKey.classList.add('pressed');
    setTimeout(() => {
        currentKey.classList.remove('pressed');
    }, 200)
})
