const openBtn = document.getElementById("openBtn");
const inviteBlock = document.getElementById("inviteBlock");
const confirmBtn = document.getElementById("confirmBtn");
const thanksText = document.getElementById("thanksText");

openBtn.addEventListener("click", () => {
    inviteBlock.classList.remove("hidden");
    openBtn.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
    thanksText.classList.remove("hidden");
});