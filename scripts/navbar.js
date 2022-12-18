// *Full screen navbar*

// Redirect to index page
function indexPage() {
    window.location.replace("/");
};

// Redirect to about page
function aboutPage() {
    window.location.replace("/about");
};

// Redirect to portfolio page
function portfolioPage() {
    window.location.replace("/portfolio");
};

// Redirect to resume page
function resumePage() {
    window.location.replace("/resume");
};


// Open popup window element passed as the function parameter (when either contact or help button is clicked)
function openPopup(popupDiv) {
    popupDiv.style.display = "block";

    // Disable scrolling
    document.body.style.overflowY = "hidden";
};

// Close popup window when "X" or "Ok" button is clicked
function closePopup(popupDiv) {
    popupDiv.style.display = "none";

    // Enable page scrolling
    document.body.style.overflowY = "auto";
};



// *Mobile screen hamburger menubar*

// Current menubar status
var navbarOpen = false;

// When menubar is clicked, check current status and change it to the opposite
function menuDropdownStatus() {
    navbarOpen = (navbarOpen == true ? false : true);

    if (navbarOpen) {
        openMenuDropdown();
    } else {
        closeMenuDropdown();
    }
}

// Expand menubar to view options
function openMenuDropdown() {
    let navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.style.display = "flex";
    navbarMenu.style.flexDirection = "column";

    let menuBtn = document.getElementById("menuBtn");
    menuBtn.innerHTML = "close";
    menuBtn.style.float = "right";
    menuBtn.style.color = "rgb(237, 237, 237)";

    document.getElementById("dropdownMenuDiv").style.backgroundColor = "rgb(104, 45, 99)";
}

// Close menubar
function closeMenuDropdown() {
    document.getElementById("navbarMenu").style.display = "none";

    let menuBtn = document.getElementById("menuBtn");
    // Change menu icon to "X" button
    menuBtn.innerHTML = "menu";
    menuBtn.style.float = "none";
    menuBtn.style.color = "rgb(104, 45, 99)";

    document.getElementById("dropdownMenuDiv").style.background = "none";
}
