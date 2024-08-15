const aboutBtn = document.querySelector(".about");
const appointmentBtn = document.querySelector(".appointment");
const policyBtn = document.querySelector(".policy");
aboutBtn.addEventListener("click", () => {
  window.location.href = "about.html";
});

appointmentBtn.addEventListener("click", () => {
  window.location.href = "appointment.html";
});

policyBtn.addEventListener("click", () => {
  window.location.href = "policy.html";
});
