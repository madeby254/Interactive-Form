// Created a const to store the Form Fields

const formField = document.querySelector("form");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#mail");
const creditcardField = document.querySelector("#cc-num");
const zipcodeField = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

// Const for the dropdown menu

const role = document.getElementById("title")
const otherRole = document.getElementById("other-title")

// Const for the Deisign and Color tabs on the T-shirt Info

const designTab = ocument.getElementById('design')
const colorTab = document.getElementById('color')

// Const for Register for Activities tab

const activities = document.getElementsByClassName("activities")
const checkboxes = $('.activities input:checkbox')
let price = 0;
const totalPrice = document.createElement('div')
totalPrice.className = 'total-price'
let content = totalPrice.textContent = 'Your Total Price: $' + totalPrice + '.00' // Make this object lit

// Shows other title when the other option is selected

role.addEventListener ('change', (event) => {
    if (event.target.value = 'other') {
        otherRole.style.display = 'block';
    } else {
        otherRole.style.display = 'none'
    }
})