let currImageIndex = 1;
displayImage(currImageIndex);

// Display the previous or next image based on imageNum
function changeImage(imageNum) {
    displayImage(currImageIndex += imageNum);
}

function displayImage(imageNum) {
    let imageSlides = document.getElementsByClassName("image-slides");

    // If imageNum is positive, it's the next button
    if (imageNum > imageSlides.length) {
        currImageIndex = 1;
    }
    // If imageNum is negative, it's the previous button
    if (imageNum < 1) {
        currImageIndex = imageSlides.length;
    }

    // Hide the rest of the images
    for (let index = 0; index < imageSlides.length; index++) {
        imageSlides[index].style.display = "none";
    }

    // Show image div at the current index
    let currImage = imageSlides[currImageIndex - 1];
    currImage.style.display = "block";
}
