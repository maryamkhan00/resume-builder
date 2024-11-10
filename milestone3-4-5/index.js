var _a, _b;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var qualification = document.getElementById("qualification").value;
    var institute = document.getElementById("institute").value;
    var major = document.getElementById("major").value;
    var duration = document.getElementById("duration").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var username = "".concat(firstName, "_").concat(lastName);
    //saving data
    var resumeData = {
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
    var resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
        resumeDiv.innerHTML = "\n            <h2> <span contenteditable=\"true\">".concat(firstName, "</span> <span contenteditable=\"true\">").concat(lastName, "</span></h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\"> ").concat(email, " </span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\"> ").concat(phone, " </span></p>\n            <h3>Education</h3>\n            <p><strong>Qualification:</strong> <span contenteditable=\"true\"> ").concat(qualification, " </span></p>\n            <p><strong>Institute:</strong> <span contenteditable=\"true\"> ").concat(institute, " </span></p>\n            <p><strong>Major:</strong> <span contenteditable=\"true\"> ").concat(major, " </span></p>\n            <p><strong>Duration:</strong> <span contenteditable=\"true\"> ").concat(duration, " </span></p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n        ");
        resumeDiv.style.display = "block";
        //unique link
        var milestone345Path = "".concat(window.location.origin, "/milestone3-4-5/");
        var shareableURL = "".concat(milestone345Path, "?username=").concat(encodeURIComponent(firstName + lastName));
        var link = document.getElementById("link");
        var share = document.getElementById("share");
        share.style.display = "block";
        link.href = shareableURL;
        link.textContent = shareableURL;
    }
});
//PDF download
(_b = document.getElementById("pdf")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    window.print();
});
// Prefill form if username exists in URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("firstName").value = resumeData.firstName;
            document.getElementById("lastName").value = resumeData.lastName;
            document.getElementById("email").value = resumeData.email;
            document.getElementById("phone").value = resumeData.phone;
            document.getElementById("qualification").value = resumeData.qualification;
            document.getElementById("institute").value = resumeData.institute;
            document.getElementById("major").value = resumeData.major;
            document.getElementById("duration").value = resumeData.duration;
            document.getElementById("skills").value = resumeData.skills;
            document.getElementById("experience").value = resumeData.experience;
        }
    }
});
