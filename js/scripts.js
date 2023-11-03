window.onload = () => {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
}
function handleFormSubmission(event) {
  event.preventDefault();
  let inputs = document.querySelectorAll("input");
  const ulElement = document.createElement("ul");
  inputs.forEach(function(flavorInput) {
    const liElement = document.createElement("li");
    liElement.append(flavorInput.value);
    ulElement.append(liElement);
  })
  const body = document.querySelector("body");
  body.append(ulElement);
}