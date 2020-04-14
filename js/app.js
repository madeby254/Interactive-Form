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

const designTab = document.getElementById('design')
const colorTab = document.getElementById('color')

// Const for Register for Activities tab

const activities = document.getElementsByClassName("activities")
const checkboxes = `$('.activities input:checkbox')`
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

// Hides all the other options

function hideColors() {
    `$('#color').children().hide();`
}

// This displays the select a theme option in the color dropdown

function selectTheme() {
    let option = document.createElement("option");
    option.value = 'selecttheme';
    option.text = 'Choose on theme to proceed';
    colorTab.appendChild(option);
    option.setAttribute('selected', 'selected');
    }

    // Called both functions here 
    hideColors()
    selectTheme()

    // I hide the select theme from the design menu

    function hideSelectTheme() {
        $('#design option').eq(0).attr('disabled', 'hidden', true).hide();
    }

    // Hide the color dropdown initially 

    const colorTabDiv = document.getElementById('colors-js-puns');
    `$(colorTabDiv).hide();`

    // Event listener to hide or show color seclection based on options selected by the user

    designTab.addEventListener('change', (e) => {
        hideSelectTheme()
        if (e.target.value === 'js puns') {
            $(colorTabDiv).show();
            hideColors();
            $('#color option[value="cornflowerblue"]').show();
            $('#color option[value="darkslategrey"]').show();
            $('#color option[value="gold"]').show();
            $('#color').prop('selectedIndex', 0);
        } else if (e.target.value === 'heart js') {
            $(colorTabDiv).show();
            hideColors();
            $('#color option[value="tomato"]').show();
            $('#color option[value="steelblue"]').show();
            $('#color option[value="dimgrey"]').show();
            $('#color').prop('selectedIndex', 3);
        } else {
            $(colorTabDiv).hide();
            $('#color option[value="tomato"]').removeAttr('selected');
            $('#color option[value="steelblue"]').removeAttr('selected');
            $('#color option[value="dimgrey"]').removeAttr('selected');
            $('#color option[value="cornflowerblue"]').removeAttr('selected');
            $('#color option[value="darkslategrey"]').removeAttr('selected');
            $('#color option[value="gold"]').removeAttr('selected');
            hideColors();
        }       
    });


    // Appended total price to the activity area
    