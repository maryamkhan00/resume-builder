document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    let lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    let qualification = (document.getElementById("qualification") as HTMLSelectElement).value;
    let institute = (document.getElementById("institute") as HTMLInputElement).value;
    let major = (document.getElementById("major") as HTMLInputElement).value;
    let duration = (document.getElementById("duration") as HTMLInputElement).value;
    let skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    let experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

    let resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
        resumeDiv.innerHTML = `
            <h2>${firstName} ${lastName}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p><strong>Qualification:</strong> ${qualification}</p>
            <p><strong>Institute:</strong> ${institute}</p>
            <p><strong>Major:</strong> ${major}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
        `;
        resumeDiv.style.display = "block";
    }
});
