// Function to redirect to specific URLs
function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/milgrau777/';
}

function redirectToTikTok() {
    window.location.href = 'https://www.tiktok.com/@milgrau';
}

function redirectToYouTube() {
    window.location.href = 'https://www.youtube.com/c/NÓISÉOCORINTHIANS';
}

function redirectToTwitch() {
    window.location.href = 'https://www.twitch.tv/corinthiansmilgrau777';
}

// Add event listeners once the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to buttons
    document.getElementById('instagram').addEventListener('click', redirectToInstagram);
    document.getElementById('tiktok').addEventListener('click', redirectToTikTok);
    document.getElementById('youtube').addEventListener('click', redirectToYouTube);
    document.getElementById('twitch').addEventListener('click', redirectToTwitch);
});
