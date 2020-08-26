let audios;
let value = 1;
function getAudios(value) {

    const interval = setInterval(() => {
        audios = document.querySelectorAll('audio');
        if(audios.length > 0) {
            clearInterval(interval);
            for (const audio of audios) {
                audio.playbackRate = value;
                // console.log(value);
            }
        }
    }, 1000);
}
function removeActives() {
    const buttons = document.querySelectorAll('.button');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(['active']);
    }
}
function addEventTalk(talks) {
    for (let i = 0; i < talks.length ; i++) {
        talks[i].addEventListener('click', () => {
           getAudios(value);
        });
    }
}
const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');
    const talks = document.querySelectorAll('._210SC');

    if(header && talks) {
        clearInterval(interval);
        addEventTalk(talks);
        const button2x = document.createElement('button');
        button2x.innerHTML = '2x';
        button2x.classList.add('button');
        button2x.addEventListener('click', () => {
            removeActives();
            button2x.classList.add('active');
            value = 2;
            getAudios(value);
        });
        const button15x = document.createElement('button');
        button15x.innerHTML = '1.5x';
        button15x.classList.add('button');
        button15x.addEventListener('click', () => {
            removeActives()
            button15x.classList.add('active');
            value = 1.5;
            getAudios(value);
        });
        const button125x = document.createElement('button');
        button125x.innerHTML = '1.25x';
        button125x.classList.add('button');
        button125x.addEventListener('click', () => {
            removeActives()
            button125x.classList.add('active');
            value = 1.25;
            getAudios(value);
        });
        const button1x = document.createElement('button');
        button1x.innerHTML = '1x';
        button1x.classList.add('button');
        button1x.addEventListener('click', () => {
            removeActives()
            button1x.classList.add('active');
            value = 1;
            getAudios(value);
        });

        header.appendChild(button2x);
        header.appendChild(button15x);
        header.appendChild(button125x);
        header.appendChild(button1x);

    }
}, 1000);

