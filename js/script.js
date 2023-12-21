function validateForm() {
    let name = document.forms["message-form"]["name"].value;
    let birthDate = document.forms["message-form"]["tanggal"].value;
    let gender = document.forms["message-form"]["gender"].value;
    let messages = document.forms["message-form"]["message-from"].value;
    let timeNow = new Date();
  
    let messageReturn = document.getElementById("returnText");
  
    if (messageReturn.classList == "returnText") {
      messageReturn.classList.toggle("returnText");
    }
  
    document.getElementById("time-api").innerHTML = timeNow;
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = messages;
  
    return false;
  }

var name = prompt("Masukkan nama kamu");
document.getElementById("nama").innerHTML = name;


let currentIndex = 0
const images = document.querySelectorAll(".img-slideshow")
const totalImages = images.length

function changeImage() {
    images[currentIndex].style.display = "none"
    currentIndex = (currentIndex + 1) % totalImages
    images[currentIndex].style.display = "block"
}

setInterval(changeImage, 2000)
