const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/**
 * Création d'une fonction showError() afin de gérer les erreurs de saisies dans le formulaire. Elle prend en paramètre input et
 * message.
 * Création d'une constante à laquelle j'affecte l'élément parent soit l'élément HTML <form></form>.
 * J'affecte la class error en complément de la class form-control à la constante formControl.
 * Je sélectionne tous les éléments HTML <small></small> et je lui affecte message qui est définie dans form.addEventListener() et
 * donc dans les conditions.
 * Le CSS mis en place entre action si le formulaire n'est pas correctement remplis.
 */
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

/**
 * Création d'une fonction showSuccess() afin de gérer une action lorsque le formulaire est correctement remplis.
 * Elle prend en paramètre input.
 * Création d'une constante à laquelle j'affecte l'élément parent soit l'élément HTML <form></form>.
 * J'affecte la class success en complément de la class form-control à la constante formControl.
 * Le CSS mis en place entre action si le formulaire est correctement remplis.
 */
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

/**
 * Création d'une fonction isValidEmail qui prend en paramètre email. Il y a une expression régulière mise en place
 * et qui permet de contrôler que le format de l'email saisi par l'utilisateur est correct.
 */
function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(String(email).toLowerCase());
}

/**
 * Je contrôle que tous les champs ne sont pas vide à la validation du formulaire.
 * Si un des champs est vide. J'appelle la fonction showError qui prend en paramètre l'input et un message dans le cas contraire.
 * C'est la fonction fonction showSuccess qui est appelée avec en paramètre l'input concerné.
 *
 * Pour l'email, j'appelle la fonction isValidEmail qui prend en paramètre la valeur saisie dans l'input.
 * Elle contrôle que le format de l'email est correct.
 */

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Nom d'utilisateur requis !!!");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email requis !!!");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email non valide !!!");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Mot de passe requis !!!");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Mot de passe de confirmation requis !!!");
  } else {
    showSuccess(password2);
  }
});
