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

let username:string = `${firstName}_${lastName}`    

//saving data
let resumeData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    qualification: qualification,
    institute: institute,
    major: major,
    duration: duration,
    skills: skills,
    experience: experience,
};
localStorage.setItem(username, JSON.stringify(resumeData));

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
        let milestone345Path = `${window.location.origin}/milestone3-4-5/`;
        let shareableURL = `${milestone345Path}?username=${encodeURIComponent(firstName+lastName)}`;
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

// Prefill form if username exists in URL
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");

    if (username) {
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById("firstName") as HTMLInputElement).value = resumeData.firstName;
            (document.getElementById("lastName") as HTMLInputElement).value = resumeData.lastName;
            (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
            (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
            (document.getElementById("qualification") as HTMLSelectElement).value = resumeData.qualification;
            (document.getElementById("institute") as HTMLInputElement).value = resumeData.institute;
            (document.getElementById("major") as HTMLInputElement).value = resumeData.major;
            (document.getElementById("duration") as HTMLInputElement).value = resumeData.duration;
            (document.getElementById("skills") as HTMLTextAreaElement).value = resumeData.skills;
            (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;
        }
    }
});
    

