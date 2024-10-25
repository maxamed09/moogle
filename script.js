// Simple search functionality
document.querySelector('.search-box input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value;
        if (query.trim()) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

document.querySelector('.buttons').children[0].addEventListener('click', function() {
    const query = document.querySelector('.search-box input').value;
    if (query.trim()) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});
 // Function to change the body's background to an image temporarily
 function changeBackgroundImage() {
    // Set the background image and style
    document.body.style.backgroundImage = "url('moha.jpeg')"; // Set background image
    document.body.style.backgroundSize = "contain"; // Ensure the whole image is visible
    document.body.style.backgroundPosition = "center"; // Center the image
    document.body.style.backgroundRepeat = "no-repeat"; // Prevent repeating

    // Set a timeout to revert back to original background after 3 seconds
    setTimeout(() => {
        document.body.style.backgroundImage = ""; // Clear the background image
        document.body.style.backgroundColor = "white"; // Reset to original background color
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Attach click event listener to the element with class 'red'
const redElement = document.querySelector('.red');
redElement.addEventListener('click', changeBackgroundImage);