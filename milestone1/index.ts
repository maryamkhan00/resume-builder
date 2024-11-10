let toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
let skillsSection = document.getElementById("skillsSection") as HTMLElement;

toggleButton.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});