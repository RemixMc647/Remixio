(function () {

    const params = new URLSearchParams(window.location.search);

    const title = params.get("title") || "Unknown Song";
    const file = params.get("file");

    const titleEl = document.getElementById("title");
    const audio = document.getElementById("audio");
    const download = document.getElementById("download");

    if (titleEl) titleEl.textContent = title;

    if (!file) {
        titleEl.textContent = "Song not found";
        return;
    }

    const song = decodeURIComponent(file);

    // Load audio
    audio.src = "/" + song;
    audio.load();

    // Download button
    download.href = "/" + song;
    download.download = song;

    audio.onerror = () => {
        alert("Unable to load this song.");
        console.error(audio.src);
    };

})();
