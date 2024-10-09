
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
        case 'password':
            return document.getElementById('pass');
        default:
            return null;
    }
}

function validateLoginForm(event) {
    event.preventDefault();

    var password = document.getElementById('pass');
    var isValid = true;

    var inputFields = document.querySelectorAll("#form-sign input");
    var errorMessages = document.querySelectorAll("#form-sign .error-message");
    inputFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
    errorMessages.forEach(function (message) {
        message.textContent = "";
    });

    if (password) {
        var passwordValue = password.value.trim();
        var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
        if (!passwordPattern.test(passwordValue)) {
          password.classList.add("invalid");
          var existingErrorMessage = findErrorMessage(password);
          if (!existingErrorMessage) {
            var errorMessage = document.createElement('span');
            errorMessage.textContent = 'لطفا یک رمز عبور معتبر وارد کنید';
            errorMessage.style.color = "red";
            errorMessage.classList.add('error-message');
            password.parentElement.appendChild(errorMessage);
          }
          isValid = false;
        }
      }

    if (isValid) {
       window.location.href = "../main.html";
    }

    return isValid;
}









