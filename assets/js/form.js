const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".item");

// Efface les erreurs quand l'utilisateur tape
inputs.forEach(function(input)  {
  input.addEventListener("keyup", function(){
    const errorText = input.nextElementSibling;
    if (input.value.trim() !== "") {
      input.classList.remove("error");
      if (errorText && errorText.classList.contains("error-txt")) {
        errorText.style.display = "none";
      }
    }
  });
});

// Vérifie les champs avant d'envoyer
function checkInputs() {
  let formIsValid = true;

  inputs.forEach(function(input) {
    const errorText = input.nextElementSibling;

    if (input.value.trim() === "") {
      input.classList.add("error");
      if (errorText && errorText.classList.contains("error-txt")) {
        errorText.style.display = "block";
      }
      formIsValid = false;
    } else {
      input.classList.remove("error");
      if (errorText && errorText.classList.contains("error-txt")) {
        errorText.style.display = "none";
      }
    }
  });

  return formIsValid;
}

// Soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid = checkInputs();

  if (isValid) {
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xanoaavk", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Formulaire envoyé avec succès !");
        form.reset();
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    })
    .catch(error => {
      alert("Erreur réseau. Vérifie ta connexion internet.");
      console.error(error);
    });
  }
});








// const form = document.querySelector(".form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Sélection des champs
//     const name = form.querySelector("#name");
//     const lastname = form.querySelector("#lastname");
//     const email = form.querySelector("#email");
//     const phone = form.querySelector("#number");
//     const message = form.querySelector("#message");

//     const fields = [name, lastname, email, phone, message];

//     let formIsValid = true;

//     fields.forEach((field) => {
//         const errorText = field.nextElementSibling;

//         if (field.value.trim() === "") {
//             field.classList.add("error");
//             if (errorText && errorText.classList.contains("error-txt")) {
//                 errorText.style.display = "block";
//             }
//             formIsValid = false;
//         } else {
//             field.classList.remove("error");
//             if (errorText && errorText.classList.contains("error-txt")) {
//                 errorText.style.display = "none";
//             }
//         }
//     });

//     // Validation de l'email simple
//     if (email.value && !email.value.includes("@")) {
//         email.classList.add("error");
//         email.nextElementSibling.textContent = "Email must contain '@'";
//         email.nextElementSibling.style.display = "block";
//         formIsValid = false;
//     }

//     // Si tout est valide
//     if (formIsValid) {
//         alert("Formulaire envoyé avec succès !");
//         form.reset();
//         // Masquer les erreurs après envoi
//         fields.forEach((field) => {
//             field.classList.remove("error");
//             const errorText = field.nextElementSibling;
//             if (errorText && errorText.classList.contains("error-txt")) {
//                 errorText.style.display = "none";
//             }
//         });
//     }
// });



















// const form = document.querySelector(".form");
// const message = document.querySelector(".message");





// function checkInputs(){

//     const items = document.querySelectorAll(".item")

//     for(const item of items){
//         if(item.value == ""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error-txt");
//         }
//     }




// }
// form.addEventListener("submit", function (e){
//     e.preventDefault();
//     checkInputs();

// })

// // form.addEventListener("submit" , function(e){
// //     e.preventDefault()
    
// //     //1. acces à l'element input name
// //     const name = form.name.value;
// //     const email = form.email.value;
// //     const select = form.subject;




// //     let inputNameIsValid = false;
// //     let inputEmailIsValid = false;
// //     let inputSelectIsValid = false;
// //     let message = false;




// //     // 2. vérifier que le champ est valide
// //     //شرط عمومی برای اجرای عمل ها
// //     if(name != "" && name.length >= 2 && name.length < 15){
// //         inputNameIsValid = true;
// //     }
    

// //     //شرط اگز ایمیل ت ساین داشت ازسال کم
// //     if(email != "" && email.includes("@")){
// //         inputEmailIsValid = true;
// //     }
// //     if(message != "" ){
// //         message = true;
// //     }

// //         if(select.value != ""){
// //             inputSelectIsValid = true;
// //         }


// //     if(inputNameIsValid && inputEmailIsValid && inputSelectIsValid && message){
// //         // message.innerText = "Formulaire envoyé";
// //         message.classList.add("succes");
// //         message.classList.remove("error");
// //     }else{

// //         message.classList.add("error");
// //         message.classList.remove("succes");
// //     }


    
// // });













// // setTimeout(function(){
// //     message.innerText = "";

// // } , 3000);