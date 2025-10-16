// DOM elements
const modal = document.getElementById("how-to-play-modal");
const btn = document.getElementById("how-to-play");
const span = document.getElementsByClassName("close")[0];

//How to Play Modal
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}