const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".item");
const messageBox = document.getElementById("confirmation");

// زمان بندی ناپدید شدن پیام
let timeoutMessage = null; 
function showMessage(text, type = "success") {
  clearTimeout(timeoutMessage); 
  messageBox.textContent = text;
  messageBox.className = "message-box " + type + " show";
  //  après 5 secondes
  timeoutMessage = setTimeout(() => {
    messageBox.classList.remove("show");
  }, 5000);
}

// حذف ایرور به محض اینکه تایپ میشود
inputs.forEach(input => {
  input.addEventListener("input", () => {
    input.classList.remove("error");
    const errorText = input.nextElementSibling;
    if (errorText && errorText.classList.contains("error-txt")) {
      errorText.style.display = "none";
    }
  });
});

// Vérifie les champs + validité de l'email
function checkInputs() {
  let formIsValid = true;

  inputs.forEach(input => {
    const value = input.value.trim();
    const errorText = input.nextElementSibling;

    if (value === "") {
      input.classList.add("error");
      if (errorText) errorText.style.display = "block";
      formIsValid = false;
    } else if (input.type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      input.classList.add("error");
      if (errorText) {
        errorText.textContent = "Invalid email address";
        errorText.style.display = "block";
      }
      formIsValid = false;
    } else {
      input.classList.remove("error");
      if (errorText) errorText.style.display = "none";
    }
  });

  return formIsValid;
}

// Envoi du formulaire
form.addEventListener("submit", e => {
  e.preventDefault();

  if (checkInputs()) {
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xanoaavk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
      if (response.ok) {
        showMessage(`✅ Your form has been sent successfully!
           Your data will not be shared with third parties.`, "success");
        form.reset();
      } else {
        showMessage("❌ Oops! Something went wrong. Please try again.", "error");
      }
    })
    .catch(error => {
      console.error(error);
      showMessage("⚠️ Looks like there’s a network issue. Please check your internet connection and try again.", "error");
    });
  }
});