// list of songs in the repository
const songs = [
    { name: "Song 1", artist: "Artist 1", file: "songs/song1.mp3" },
    { name: "Song 2", artist: "Artist 2", file: "songs/song2.mp3" },
    { name: "Song 3", artist: "Artist 3", file: "songs/song3.mp3" }
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
    `;

    songItem.addEventListener("click", () => {
        let songFile = song.file;
        audioPlayer.src = songFile;

        // wait until the audio is fully ready to play
        audioPlayer.oncanplaythrough = () => {
            audioPlayer.play();
            console.log(`Now playing: ${song.name} by ${song.artist}`);
        };

        // if the song isn't fully loaded, let the user know
        audioPlayer.onerror = () => {
            alert("Sorry, this song couldn't be loaded.");
        };
    });

    playlist.appendChild(songItem);
});
