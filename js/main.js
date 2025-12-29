document.addEventListener("DOMContentLoaded", () => {
    // Get all player buttons
    const playerButtons = document.querySelectorAll(".player-btn");
    const youtubeIframe = document.getElementById("youtube-video");
    const playerHighlight = document.querySelector(".player-highlight");

    // Add event listener to each button
    playerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const videoId = button.getAttribute("data-video-id");
            const highlightImage = button.getAttribute("data-highlight-img");

            // Update the YouTube iframe source to autoplay the selected video
            youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            // Insert the corresponding player highlight image into the container
            playerHighlight.innerHTML = `<img src="${highlightImage}" alt="Player Highlight">`;

            // Fade in the player highlight image (Slide effect if needed)
            playerHighlight.style.opacity = 1;
            playerHighlight.style.transform = 'translateX(0)';
        });
    });
});
