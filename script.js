
document.addEventListener('DOMContentLoaded', function() { 
    const avatarImage = document.querySelector('.avatar img'); 
  
    avatarImage.addEventListener('mouseover', function() {
      this.src="images/avatar 1.png"; 
    });
  
    avatarImage.addEventListener('mouseout', function() {
      this.src = "images/avatar 2.png"; 
    });
  });
  
