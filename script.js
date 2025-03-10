const songs = [
    { name: "Resonance - Perfect Slowed", artist: "Noir/DRXYL", file: "songs/Resonance - Perfect Slowed.mp3" }
];

let playlist = document.getElementById("playlist");
let audioPlayer = document.getElementById("audio-player");
let playButton = document.getElementById("play-button");
let progressBar = document.getElementById("progress-bar").firstElementChild;
let volumeControl = document.getElementById("volume");

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
    `;

    songItem.addEventListener("click", () => {
        audioPlayer.src = song.file;
        audioPlayer.oncanplaythrough = () => {
            audioPlayer.play();
            playButton.textContent = "⏸";
        };
    });

    playlist.appendChild(songItem);
});

// play/pause button
playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audio
