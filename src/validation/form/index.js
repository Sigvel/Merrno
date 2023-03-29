export const form = document.getElementById("contact-form");

export function contact(e) {
e.preventDefault();

const formCredentials = e.target;

const formData = new FormData(formCredentials);
const formValues = Object.fromEntries(formData.entries());

    formValidation(formValues);
}



function formValidation(values) {
  
console.log(values);
}


