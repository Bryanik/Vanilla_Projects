function toggleText(event) {
  event.preventDefault(); //prevents default behaviour when clicking "a" tags i.e. jump to top of page or refresh page
  let moreText = document.getElementById("moreText");
  let btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.textContent = "Read More";
  }
}

// Function to check screen size and toggle "Read More" visibility
function checkScreenSize() {
  let btnText = document.getElementById("readMoreBtn");
  let moreText = document.getElementById("moreText");

  if (window.innerWidth <= 768) {
    btnText.style.display = "inline"; // Show Read More on small screens
    moreText.style.display = "none"; // Ensure hidden initially
  } else {
    btnText.style.display = "none"; // Hide Read More on large screens
    moreText.style.display = "inline"; // Show full text
  }
}

// Run check on page load and when resized
window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);
