


// Const for capturing the fields
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#mail");
const creditcard = document.querySelector("#cc-num");
const zipcode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");
// Dropdown selections
const title = document.getElementById("title");
const otherTitle = document.getElementById("other-title");
// Const for the design and color selection dropdowns
const design = document.getElementById('design');
const colorSelection = document.getElementById('color');
// Const for storing the activities section and the total price 
const activities = document.getElementsByClassName("activities");
const activityCheckboxes = $('.activities input:checkbox');
let totalPrice = 0;
const totalPriceDiv = document.createElement('div');
totalPriceDiv.className = "total-price";
let textContent = totalPriceDiv.textContent = 'Total Price: $' + totalPrice + '.00';
// Const for payments
const payment = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
// Error messages store here
const nameError = document.getElementsByClassName('name-error')
const emailError = document.getElementsByClassName('email-error');
const notEmailError = document.getElementsByClassName('not-email-error');
const activitiesError = document.getElementsByClassName('activities-error');
const ccError = document.getElementsByClassName('cc-error');
const ccErrorAdd = document.getElementsByClassName('cc-error-add');
const zipcodeError = document.getElementsByClassName('zipcode-error');
const cvvError = document.getElementsByClassName('cvv-error');

// places the focus on the name field on page load
document.getElementById("name").focus();

// Hide the 'other title' text box on page load
window.onload = function() {
    otherTitle.style.display = 'none';
};

// Shows the other title text box when other has been selected f
title.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherTitle.style.display = 'block';
    } else {
        otherTitle.style.display = 'none';
    }
});

// Hide all the color options
function hideColors() {
    $('#color').children().hide();
}

// Display select theme
function selectTheme() {
let option = document.createElement("option");
option.value = 'selecttheme';
option.text = 'Please select a theme';
colorSelection.appendChild(option);
option.setAttribute('selected', 'selected');
}

//declares functions to hide the colors and display and calls it
hideColors();
selectTheme();

// Hides the "select theme" from the design menu
function hideSelectTheme() {
    $('#design option').eq(0).attr('disabled', 'hidden', true).hide();
}

// Get the color dropdown menu its hidden initially 
const colorSelectionDiv = document.getElementById('colors-js-puns');
$(colorSelectionDiv).hide();

// this addEventListern hides or shows color selection options on the user selection
design.addEventListener('change', (e) => {
    hideSelectTheme()
    if (e.target.value === 'js puns') {
        $(colorSelectionDiv).show();
        hideColors();
        $('#color option[value="cornflowerblue"]').show();
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
        $('#color').prop('selectedIndex', 0);
    } else if (e.target.value === 'heart js') {
        $(colorSelectionDiv).show();
        hideColors();
        $('#color option[value="tomato"]').show();
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();
        $('#color').prop('selectedIndex', 3);
    } else {
        $(colorSelectionDiv).hide();
        $('#color option[value="tomato"]').removeAttr('selected');
        $('#color option[value="steelblue"]').removeAttr('selected');
        $('#color option[value="dimgrey"]').removeAttr('selected');
        $('#color option[value="cornflowerblue"]').removeAttr('selected');
        $('#color option[value="darkslategrey"]').removeAttr('selected');
        $('#color option[value="gold"]').removeAttr('selected');
        hideColors();
    }       
});

// Append the total price to the activities section
$(activities).append(totalPriceDiv);

// checks for any other time conflicts 
// calculates the total price
$(activityCheckboxes).change(function (event) {

    for (let i = 0; i < activityCheckboxes.length; i++) {
        let eventTime = event.target.getAttribute('data-day-and-time');
        let conflictEvent = activityCheckboxes[i].getAttribute('data-day-and-time')
        let eventName = activityCheckboxes[i].getAttribute('name');
        let clickedEventName = event.target.getAttribute('name');
        if (conflictEvent === eventTime && clickedEventName !== eventName) {
        if ($(event.target).is(":checked")) {
                $(activityCheckboxes[i]).prop('disabled', true);
            } else {
                $(activityCheckboxes[i]).prop('disabled', false);
            }
        }
    }
    for (let i = 0; i < activities.length; i++) {
        if ($(event.target).is(":checked")) {
            totalPrice += parseInt(event.target.getAttribute('data-cost'));
            totalPriceDiv.textContent = 'Total Price: $' + totalPrice + '.00';
        } else {
            totalPrice -= parseInt(event.target.getAttribute('data-cost'));
            totalPriceDiv.textContent = 'Total Price: $' + totalPrice + '.00';
        }
    }
  });
  


// Hides payment info
function hideSelectPayment() {
    $('#payment option').eq(0).attr('disabled', 'hidden', true).hide();
}
function hideCreditCard() {
    $(creditCardDiv).hide();
}
function hidePaypal() {
    $(paypalDiv).hide();
}
function hideBitcoin() {
    $(bitcoinDiv).hide();
}

// Hide paypal and bitcoin payment options at load
hidePaypal();
hideBitcoin();

// Have the credit card payment option selected at page load
$('#payment').prop('selectedIndex', 1);

// Reveal the corresponding payment options based on the selecion
payment.addEventListener('change', (e) => {
    hideSelectPayment();
    if (e.target.value === 'credit card') {
        $(creditCardDiv).show();
        hideBitcoin();
        hidePaypal();
    } if (e.target.value === 'paypal') {
        $(paypalDiv).show();
        hideCreditCard();
        hideBitcoin();
    } if (e.target.value === 'bitcoin') {
        $(bitcoinDiv).show();
        hidePaypal();
        hideCreditCard();
    }       
});


// Form validation regex
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let creditcardFormat = /^[0-9]{13,16}$/;
let zipcodeFormat = /^[0-9]{5}$/;
let cvvFormat = /^[0-9]{3}$/;
let notEmail = /^((?!@).)*$/;


// Name validation
const nameValidator = () => {
    let nameValue = name.value;
    if (nameValue.length > 0) {
        return (true);
    } else {
        return (false);

    }
};

// Email validation
const emailValidator = () => {
    let emailValue = email.value;
    if (emailValue.match(mailformat)) {
        return (true)
    } else {
        return (false)
    }
};

// IF Email is  not valid
const notEmailValidator = () => {
    let emailValue = email.value;
    if (emailValue.match(mailformat)) {
        return (true);
    } else {
        return (false);
    }
}

// Activities validation
const activitiesValidator = () => {
    if ($(activityCheckboxes).is(":checked")) {
        console.log('activity is checked');
        return (true);
    } else {
        return (false);
    }
};

// Validation for credit card

// Credit card validation
const creditcardValidator = () => {
    let creditcardValue = creditcard.value;
    if (creditcardValue.match(creditcardFormat)) {
        return (true);
    } else {
        return (false);
    }
};

// Partial credit card this will require the correct number of credit card ie between 13 - 16
const partialccValidator = () => {
    let creditcardValue = creditcard.value;
    if ((!creditcardValue.match(creditcardFormat)) && (creditcardValue > 0)) {
        return (true);
    } else {
        return (false);
    }
};

// zipcode validation
const zipcodeValidator = () => {
    let zipcodeValue = zipcode.value;
    if (zipcodeValue.match(zipcodeFormat)) {
        return (true);
    } else {
        return (false);
    }
};

// CVV validation
const cvvValidator = () => {
    let cvvValue = cvv.value;
    if (cvvValue.match(cvvFormat)) {
        return (true);
    } else {
        return (false);
    }
};




// hide all error message
$(nameError).hide();
$(emailError).hide();
$(notEmailError).hide();
$(activitiesError).hide();
$(ccError).hide();
$(ccErrorAdd).hide();
$(zipcodeError).hide();
$(cvvError).hide();

// submit and validation error messages
form.addEventListener('submit', (e) => {
    if (!nameValidator()) {
        e.preventDefault();
        name.style.borderColor = "red";
        $(nameError).fadeIn();
    } else {
        name.removeAttribute("style");
        $(nameError).fadeOut();
    }
    if (!emailValidator()) {
        e.preventDefault();
        email.style.borderColor = "red";
        $(emailError).fadeIn();
    } else {
        email.removeAttribute("style");
        $(emailError).fadeOut();
        $(notEmailError).fadeOut();
    }
    if ((!emailValidator()) && email.value.length > 0) {
        e.preventDefault();
        email.style.borderColor = "red";
        $(emailError).fadeOut();
        $(notEmailError).fadeIn();
    } else {
        $(notEmailError).fadeOut();
    }
    if (!activitiesValidator()) {
        $(activitiesError).fadeIn();
        e.preventDefault();
    } else {
        $(activitiesError).fadeOut();
    }

    if (payment.value === 'credit card') {
        if (!creditcardValidator()) {
                if (partialccValidator()) {
                    $(ccErrorAdd).show();
                    e.preventDefault();
                    creditcard.style.borderColor = "red";
                } else {
                    creditcard.removeAttribute("style");
                    $(ccErrorAdd).fadeOut();
                }
            e.preventDefault();
            creditcard.style.borderColor = "red";
            $(ccError).fadeIn();
        } else {
            creditcard.removeAttribute("style");
            $(ccError).fadeOut();
        }
        
        if (!zipcodeValidator()) {
            e.preventDefault();
            zipcode.style.borderColor = "red";
            $(zipcodeError).fadeIn();
        } else {
            zipcode.removeAttribute("style");
            $(zipcodeError).fadeOut();
        }
        if (!cvvValidator()) {
            e.preventDefault();
            cvv.style.borderColor = "red";
            $(cvvError).fadeIn();
        } else {
            cvv.removeAttribute("style");
            $(cvvError).fadeOut();
        }
    };
});


// Form inline validation
$(name).on('input', function () {
    if (name.value.length > 0) {
    $(nameError).fadeOut();
      $(name).css("borderColor", '');
    }
});

$(email).on('input', function () {
    if (email.value.length > 0) {
        $(email).css("borderColor", 'red');
        $(emailError).hide();
        $(notEmailError).fadeIn(0);
    } else {
    $(emailError).show();
    $(notEmailError).hide();
    $(email).css("borderColor", '');
  }
});

$(email).on('input', function () {
    if (!$(email).val().match(mailformat)) {
        $(email).css("borderColor", 'red');
    } else {
    $(emailError).fadeOut();
    $(notEmailError).fadeOut();
    $(email).css("borderColor", '');
  }
});

$(activities).on('input', function () {
    if ($(activityCheckboxes).is(":checked")) {
    $(activitiesError).fadeOut();
      $(email).css("borderColor", '');
    } else {
        $(activitiesError).fadeIn();
    }
});

$(creditcard).on('input', function () {
    if (!$(creditcard).val().match(creditcardFormat)) {
    $(ccError).fadeIn();
    $(creditcard).css("borderColor", 'red');
    } else {
    $(ccError).fadeOut();
    $(ccErrorAdd).fadeOut();
    $(creditcard).css("borderColor", '');
  }
});

$(creditcard).on('input', function () {
    if ((!$(creditcard).val().match(creditcardFormat)) && (creditcardValue > 0)) {
        $(ccErrorAdd).fadeIn();
    } else {
        $(ccErrorAdd).fadeOut();
    }
});

$(zipcode).on('input', function () {
    if (!$(zipcode).val().match(zipcodeFormat)) {
    $(zipcodeError).fadeIn();
    $(zipcode).css("borderColor", 'red');
    } else {
    $(zipcodeError).fadeOut();
    $(zipcode).css("borderColor", '');
  }
});

$(zipcode).on('input', function () {
    if (!$(cvv).val().match(cvvFormat)) {
    $(cvvError).fadeIn();
    $(cvv).css("borderColor", 'red');
    } else {
    $(cvvError).fadeOut();
    $(cvv).css("borderColor", '');
  }
});

$(cvv).on('input', function () {
    if (!$(cvv).val().match(cvvFormat)) {
    $(cvvError).fadeIn();
    $(cvv).css("borderColor", 'red');
    } else {
    $(cvvError).fadeOut();
    $(cvv).css("borderColor", '');
  }
});