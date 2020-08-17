let audios;
function getAudios(value) {

    audios = document.querySelectorAll('audio');
    for (const audio of audios) {
        audio.playbackRate = value;
    }
}

const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');
    if(header) {
        clearInterval(interval);

        const button2x = document.createElement('button');
        button2x.innerHTML = '2x';
        button2x.classList.add('button');
        button2x.addEventListener('click', () => {
           getAudios(2);
        });
        const button15x = document.createElement('button');
        button15x.innerHTML = '1.5x';
        button15x.classList.add('button');
        button15x.addEventListener('click', () => {
            getAudios(1.5);
        });
        const button125x = document.createElement('button');
        button125x.innerHTML = '1.25x';
        button125x.classList.add('button');
        button125x.addEventListener('click', () => {
           getAudios(1.25);
        });
        const button1x = document.createElement('button');
        button1x.innerHTML = '1x';
        button1x.classList.add('button');
        button1x.addEventListener('click', () => {
           getAudios(1);
        });

        header.appendChild(button2x);
        header.appendChild(button15x);
        header.appendChild(button125x);
        header.appendChild(button1x);

    }
}, 1000);

