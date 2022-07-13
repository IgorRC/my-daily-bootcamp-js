// hideLearningMessages();
// showLearningMessage("warningtext");
function hideLearningMessages() {
  let messages = document.querySelectorAll(".learning-message");
  for (let message of messages) {
    message.classList.add("hidden");
  }
}

function showLearningMessage(messageClass) {
  let message = document.querySelector("." + messageClass);
  hideLearningMessages();
  message.classList.remove("hidden");
}
