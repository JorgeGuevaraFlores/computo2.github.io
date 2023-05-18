// Función para validar el formulario
function validateForm() {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var error = false;

  if (name === "") {
    document.getElementById("nameError").innerText = "Ingrese su nombre";
    error = true;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  if (lastName === "") {
    document.getElementById("lastNameError").innerText = "Ingrese su apellido";
    error = true;
  } else {
    document.getElementById("lastNameError").innerText = "";
  }

  if (email === "") {
    document.getElementById("emailError").innerText =
      "Ingrese su correo electrónico";
    error = true;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (phone === "") {
    document.getElementById("phoneError").innerText =
      "Ingrese su número de teléfono";
    error = true;
  } else if (phone.split("").length <= 9) {
    document.getElementById("phoneError").innerText =
      "El número telefónico debe tener 10 digitos";
    error = true;
  } else {
    document.getElementById("phoneError").innerText = "";
    // console.log(phone.split(""));
    // console.log(phone.split("").length);
  }

  if (message === "") {
    document.getElementById("messageError").innerText = "Ingrese un mensaje";
    error = true;
  } else {
    document.getElementById("messageError").innerText = "";
  }

  if (error) {
    return false;
  } else {
    return true;
  }
}

// formulario
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Simulación del envío del correo
  setTimeout(() => {
    // Mostrar mensaje de éxito personalizado con SweetAlert2
    Swal.fire({
      icon: "success",
      title: "¡Correo enviado!",
      text: "El correo se ha enviado correctamente.",
    }).then(() => {
      // Redirigir al usuario a la página de inicio
      window.location.href = "../index.html";
    });
  }, 2000); // Simulación de tiempo de envío de correo (2 segundos)
});
