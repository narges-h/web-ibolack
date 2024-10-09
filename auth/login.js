
var inputFields = document.querySelectorAll("#form-sign input");
inputFields.forEach(function (field) {
    field.addEventListener('input', function () {
        if (this.value !== '') {
            this.classList.remove("invalid");
        } else {
            this.classList.add("invalid");
        }
    });
});

function findErrorMessage(fieldId) {
    switch (fieldId) {
        case 'phoneNumbers':
            return document.getElementById('phoneNumbersError');
        default:
            return null;
    }
}

function validateLoginForm(event) {
    event.preventDefault();

    var phone = document.getElementById('phoneNumbers');
    var isValid = true;

    var inputFields = document.querySelectorAll("#form-sign input");
    var errorMessages = document.querySelectorAll("#form-sign .error-message");
    inputFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
    errorMessages.forEach(function (message) {
        message.textContent = "";
    });

    if (phone) {
        var phoneNumberValue = phone.value.trim();
        var phoneNumberPattern = /^0\d{10}$/;
        if (!phoneNumberPattern.test(phoneNumberValue)) {
            phone.classList.add("invalid");
            var errorMessageElement = findErrorMessage('phoneNumbers');
            errorMessageElement.textContent = 'لطفا شماره تلفن معتبر وارد کنید';
            isValid = false;
        }
    }

    if (isValid) {
       window.location.href = "password.html";
    }

    return isValid;
}