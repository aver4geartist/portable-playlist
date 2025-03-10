const songs = [
    { name: "Resonance - Perfect Slowed", artist: "Noir/DRXYL", file: "songs/Resonance - Perfect Slowed.mp3" }
];

let playlist = document.getElementById("playlist");
let audioPlayer = document.getElementById("audio-player");
let currentSongIndex = -1;

songs.forEach((song, index) => {
    let songItem = document.createElement("li");

    songItem.innerHTML = `
        <div class="song-info">
            <img src="https://cdn-icons-png.flaticon.com/512/26/26630.png" alt="music icon">
            <div>
                <strong>${song.name}</strong><br>
                <small>${song.artist}</small>
            </div>
        </div>
        <div class="audio-container">
            <button class="play-button">▶</button>
            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;

    let playButton = songItem.querySelector(".play-button");
    let progressBar = songItem.querySelector(".progress-bar");

    playButton.addEventListener("click", () => {
        if (currentSongIndex !== index) {
            // new song clicked -> switch track
            audioPlayer.src = song.file;
            audioPlayer.play();
            currentSongIndex = index;
            updateAllButtons();
            playButton.textContent = "⏸";
        } else {
            // same song clicked -> toggle play/pause
            if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.textContent = "⏸";
            } else {
                audioPlayer.pause();
                playButton.textContent = "▶";
            }
        }
    });

    audioPlayer.addEventListener("timeupdate", () => {
        if (currentSongIndex === index) {
            let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = progress + "%";
        }
    });

    playlist.appendChild(songItem);
});

function updateAllButtons() {
    document.querySelectorAll(".play-button").forEach((btn, i) => {
        btn.textContent = i === currentSongIndex ? "⏸" : "▶";
    });

    document.querySelectorAll(".progress-bar").forEach((bar, i) => {
        if (i !== currentSongIndex) {
            bar.style.width = "0%";
        }
    });
}
