const songs = [
    { name: "Resonance - Perfect Slowed", artist: "Noir/DRXYL", file: "songs/Resonance - Perfect Slowed.mp3" }
];

let playlist = document.getElementById("playlist");
let audioPlayer = document.getElementById("audio-player");

songs.forEach(song => {
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
            <div class="progress-bar"><div></div></div>
        </div>
    `;

    let playButton = songItem.querySelector(".play-button");
    let progressBar = songItem.querySelector(".progress-bar div");

    playButton.addEventListener("click", () => {
        if (audioPlayer.src !== song.file) {
            audioPlayer.src = song.file;
            audioPlayer.play();
            playButton.textContent = "⏸";
        } else {
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
        let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = progress + "%";
    });

    playlist.appendChild(songItem);
});
