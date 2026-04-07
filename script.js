const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const boyImg = document.getElementById('boy-img');
const romanticAudio = document.getElementById('romantic-audio');
const sadAudio = document.getElementById('sad-audio');
const responseMessage = document.getElementById('response-message');

// When she clicks YES
btnYes.addEventListener('click', () => {
    // Change image to boy giving flowers
    boyImg.src = 'boy-happy.gif'; 
    
    // Manage Audio
    sadAudio.pause();
    sadAudio.currentTime = 0;
    romanticAudio.play();
    
    // Update text
    responseMessage.innerText = "You just made me the happiest person! ❤️";
    responseMessage.style.color = "#d6336c";
});

// When she clicks NO
btnNo.addEventListener('click', () => {
    // Change image to boy walking away sad
    boyImg.src = 'boy-sad.gif'; 
    
    // Manage Audio
    romanticAudio.pause();
    romanticAudio.currentTime = 0;
    sadAudio.play();
    
    // Update text
    responseMessage.innerText = "Ouch... but I still think you're amazing.";
    responseMessage.style.color = "#555";
});
