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
            <h2> <span contenteditable="true">${firstName}</span> <span contenteditable="true">${lastName}</span></h2>
            <p><strong>Email:</strong> <span contenteditable="true"> ${email} </span></p>
            <p><strong>Phone:</strong> <span contenteditable="true"> ${phone} </span></p>
            <h3>Education</h3>
            <p><strong>Qualification:</strong> <span contenteditable="true"> ${qualification} </span></p>
            <p><strong>Institute:</strong> <span contenteditable="true"> ${institute} </span></p>
            <p><strong>Major:</strong> <span contenteditable="true"> ${major} </span></p>
            <p><strong>Duration:</strong> <span contenteditable="true"> ${duration} </span></p>
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
        `;
        resumeDiv.style.display = "block";

        //unique link
        let shareableURL = `${window.location.origin}?username=${encodeURIComponent(firstName+lastName)}`;
        let link = document.getElementById("link") as HTMLAnchorElement;
        let share = document.getElementById("share") as HTMLDivElement;

        share.style.display = "block";
        link.href = shareableURL;
        link.textContent = shareableURL;
    }
});

//PDF download
document.getElementById("pdf")?.addEventListener("click", function () {
    window.print();
});

    

