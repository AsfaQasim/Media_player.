let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlicon = document.getElementById('playpause');

// When the song metadata is loaded, set the max value of the progress bar
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Toggle play/pause when clicking the control icon
function playpause() {
    if (ctrlicon.classList.contains("fa-circle-pause")) {
        song.pause();
        ctrlicon.classList.remove("fa-circle-pause");
        ctrlicon.classList.add("fa-circle-play");
    } else {
        song.play();
        ctrlicon.classList.add("fa-circle-pause");
        ctrlicon.classList.remove("fa-circle-play");
    }
}

// Update progress bar while the song is playing
song.ontimeupdate = function() {
    progress.value = song.currentTime;
};

// When the user changes the progress bar value, seek to the new time
progress.oninput = function() {
    song.currentTime = progress.value;
    song.play();  // Ensure the song continues playing after seeking
    ctrlicon.classList.add("fa-circle-pause");
    ctrlicon.classList.remove("fa-circle-play");
};
