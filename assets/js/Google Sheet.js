const scriptURL =
  "https://script.google.com/macros/s/AKfycbxPVp47hKmSnMsC9pyCtMesmakiiuq_0lL2q3DCY6tv-lwGpVHrCI98VBXG-lFxC74x/exec";

const form = document.forms["enquiry-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your enquiry is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
