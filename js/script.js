document.addEventListener("DOMContentLoaded", function () {
  const messages = document.querySelectorAll(".msg");
  messages.forEach((message, index) => {
    setTimeout(() => {
      //   message.style.opacity = "1";
      message.style.animation = "slideIn 1s ease-out forwards";
      //   message.style.animationDelay = `${index * 0.5}s`; // Stagger the animations
    }, index * 500); // Adjust the delay time as needed
  });
});
