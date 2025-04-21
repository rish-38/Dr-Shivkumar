function message() {
  const inputField = document.getElementById("w-input");
  const phoneNumber = "9372030485";
  const message = encodeURIComponent(inputField.value);
  if (message.trim() !== "") {
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
  } else {
      alert("Please enter a message before sending.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("w-send");
  const inputField = document.getElementById("w-input");

  sendButton.addEventListener("click", sendMessage);
  inputField.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
          sendMessage();
      }
  });
});
