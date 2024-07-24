const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// array para as músicas
const songs = ['ser humano ou um anjo', 'seu astral', 'meteoro', 'garotas não merecem chorar', 'um beijo', 'te esperando',
    'amar não é pecado', 'incondicional', 'as lembranças vão na mala', 'eu você o mar é ela', 'tudo que você quiser', 'eu era', 'coração cigano', 'flor e o beija flor', 'ana julia'
]

let songIndex = 0;

loadSong(songs[songIndex])

// update músicas
function loadSong(song) {
    title.innerText = song;
    audio.src = `assets/musicas/${song}.mp3`;
    cover.src = `assets/imagens/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// mudar a música
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);


function aparecer() {
    const img = document.getElementById('contimagens');
    if (img.style.display === 'none' || img.style.display === '') {
        img.style.display = 'block'; // Exibe a imagem
    } else {
        img.style.display = 'none';  // Oculta a imagem
    }
}


