var _a;
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
    var resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
        resumeDiv.innerHTML = "\n            <h2>".concat(firstName, " ").concat(lastName, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p><strong>Qualification:</strong> ").concat(qualification, "</p>\n            <p><strong>Institute:</strong> ").concat(institute, "</p>\n            <p><strong>Major:</strong> ").concat(major, "</p>\n            <p><strong>Duration:</strong> ").concat(duration, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        ");
        resumeDiv.style.display = "block";
    }
});
