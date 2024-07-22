
const audioElement = document.querySelector('audio');

const searchInput = document.querySelector("#search-input")
const playButton = document.querySelector(".music-player-play-btn");
const playIcon = document.querySelector(".music-player-icon-play");
const previousSongButton = document.querySelector(".music-player-icon-previous");
const nextSongButton =  document.querySelector(".music-player-icon-next")      
const pauseIcon = document.querySelector(".music-player-icon-pause");
const progress = document.querySelector(".music-player-progress")   
const progressFilled = document.querySelector(".music-player-progress-filled");
const playerCurrentTime = document.querySelector(".player-time-current");  
const playerTimeDuration = document.querySelector(".player-time-duration"); 
const playlist = document.querySelector(".playlist");
const artist = document.querySelector(".artist");
const currentSong = document.querySelector(".current-song");
const currentArtist = document.querySelector(".current-artist");
const currentSongMobile = document.querySelector(".current-song-mobile");
const currentArtistMobile = document.querySelector(".current-artist-mobile");

const songs = [
    {src: "songs/Kanye West, Ty Dolla $ign & YG - DO IT (432Hz).mp3", artist: "Kanye West", title: "DO IT"},
    {src: "songs/FUK SUMN( Ft Playboi Carti & Travis Scott).mp3", artist: "Kanye West", title: "FUK SUMN"},
    {src: "songs/Kanye West & Ty Dolla $ign - CARNIVAL feat. Rich The Kid, Playboi Carti (Lyrics).mp3", artist: "Kanye West", title: "CARNIVAL"},
    {src: "songs/Psycho CEO [Official Audio].mp3", artist: "Yeat", title: "Psycho CEO"},
    {src: "songs/Power Trip [Official Audio].mp3", artist: "Yeat", title: "Power Trip"}
];

audioElement.src = songs[0].src;
let volume = audioElement.volume = 0.1;
let currentSongIndex = 0;

function searchSong() {
    const filterSearch = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => {
        return song.title.toLowerCase().includes(filterSearch) || song.artist.toLowerCase().includes(filterSearch)
    });
    generatePlaylist(filteredSongs);
};

function generatePlaylist(songsToDisplay) {
    songsToDisplay = songsToDisplay || songs;

    const playlistContainer = document.querySelector('.playlist');
    playlistContainer.innerHTML = '';

    songsToDisplay.forEach((song, index) => {
        const songDiv = document.createElement('div');

        songDiv.className = 'song hidden';
        songDiv.id = `song-${index + 1}`;
        songDiv.innerHTML = `
        <p class = "song-order">${index + 1}</p>
        <img class="play-icon" src="images/play-button.png" alt="play-button">
        <p class="song-details">
            <span class="song">${song.title}</span>
            <span class="song">${song.artist}</span>
        </p>`;
        songDiv.addEventListener('dblclick', () => playSong(index));
        playlistContainer.appendChild(songDiv);
    });
}

function playSong (index) {
    currentSongIndex = index;

    const selectedSong = songs[index];
    audioElement.src = selectedSong.src;
    playButton.dataset.playing = "true";
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    audioElement.play();

    displayCurrentDetails(index);
}

searchInput.addEventListener("input", searchSong);

searchSong();

function displayCurrentDetails(index) {
    currentSong.innerHTML = songs[index].title;
    currentArtist.innerHTML = songs[index].artist;
    currentSongMobile.innerHTML = songs[index].title;
    currentArtistMobile.innerHTML = songs[index].title;
};

window.addEventListener("load", () => {

    //player controls

    generatePlaylist();

    setTimes();

    audioElement.addEventListener("timeupdate", () => {
        setTimes();
        progressUpdate();

    });

    audioElement.addEventListener("ended", () => {
       const currentSrc = audioElement.getAttribute("src");
       const currentSongIndex = songs.findIndex(song => song.src === currentSrc);
       const nextSongIndex = (currentSongIndex + 1) % songs.length;
       playSong(nextSongIndex);
    });

    // previous song

    previousSongButton.addEventListener('click', () => {
        if (currentSongIndex > 0) {
            currentSongIndex -= 1;
        } else {
            currentSongIndex = songs.length - 1;
        }
        playSong(currentSongIndex);
    });
    
    // Play & Pause

    playButton.addEventListener("click", () => {
        if(audioElement.paused) {
            audioElement.play();
            playButton.dataset.playing = "true";
            playIcon.classList.add("hidden");
            pauseIcon.classList.remove("hidden")
        } else {
            audioElement.pause();
            playButton.dataset.playing = "false";
            playIcon.classList.remove("hidden");
            pauseIcon.classList.add("hidden")
        }
    });

    //Next Song

    nextSongButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    });

    //TODO: ADD VOLUME SLIDER
    
    //TODO: ADD CURRENT SONG TEXT ON MUSICPLAYER & ARTIST 
    

    function setTimes () {
        const newCurrentTime = new Date(audioElement.currentTime * 1000);
        const newDuration = new Date (audioElement.duration * 1000);

        playerCurrentTime.textContent =  newCurrentTime.getMinutes() + ':' + newCurrentTime.getSeconds();
        playerTimeDuration.textContent = newDuration.getMinutes() + ':' + newDuration.getSeconds();
    }

    function progressUpdate() {
        const percent = (audioElement.currentTime / audioElement.duration) * 100;
        progressFilled.style.flexBasis = `${percent}%`;
    }

    function scrub (event) {
        const scrubTime = (event.offsetX / progress.offsetWidth) * audioElement.duration;
        audioElement.currentTime = scrubTime; 
    }

    let mousedown = false;
    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", (e) => (mousedown && scrub(e)));
    progress.addEventListener("mousedown", () => (mousedown = true));
    progress.addEventListener("mouseup", () => (mousedown = false));

});

