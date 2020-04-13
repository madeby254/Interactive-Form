// Grabbing all the required elements

const formMain = document.getElementsByTagName("form")[0];
const formParent = document.getElementsByClassName("container")[0];
const nameField = document.getElementById("name");
const emailField = document.getElementById("mail");
const jobRole = document.getElementById("title");
const OtherRoles = document.getElementById("other_basic_info");
const shirt = document.getElementsByClassName("shirt")[0];

// Drop Down selection if other is selected

OtherRoles.style.display = 'none'

jobRole.addEventListener('change', (e) => {
    if (e.target.value.toLowerCase () === "other") {
        OtherRoles.style.display =''
    } else {
        OtherRoles.style.display = 'none'
    }
})