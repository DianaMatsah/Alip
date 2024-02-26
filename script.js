// Get the image element by its ID
var albumImage = document.getElementById("albumImage");

// Get the button element by its ID
var spotifyButton = document.getElementById("spotifyButton");

// Add a click event listener to the button
spotifyButton.addEventListener("click", function() {
    // Change the src attribute of the image to the URL of the album image
    albumImage.src = "img/kantoi.jpg"; // Replace "img/kantoi.jpg" with the path to your album image
});