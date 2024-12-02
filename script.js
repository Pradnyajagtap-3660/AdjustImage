// Resize the image dynamically
function resizeImage() {
    const img = document.getElementById("image");

    // Toggle between two sizes
    if (img.style.width === "300px") {
        img.style.width = "500px";
    } else {
        img.style.width = "300px";
    }
}

// Flip the image horizontally
function flipHorizontal() {
    const img = document.getElementById("image");
    img.classList.toggle("flip-horizontal");
}

// Flip the image vertically
function flipVertical() {
    const img = document.getElementById("image");
    img.classList.toggle("flip-vertical");
}
