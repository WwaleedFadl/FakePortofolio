/** @format */

// Add custom JavaScript here
function runTypingEffect() {
  const text = "{Hello World , I am John Doe};";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;
  typeText(text, typingElement, typingDelay);
}
function typeText(text, typingElement, Delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, Delay * i);
  }
}
document.addEventListener("DOMContentLoaded", runTypingEffect);
