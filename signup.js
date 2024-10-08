document.getElementById('form-register').addEventListener('submit', validateRegisterForm);

var inputFields = document.querySelectorAll("#form-register input");
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
    case 'fullname':
      return document.getElementById('fullnameError');
    case 'emailuser':
      return document.getElementById('emailError');
    case 'pass':
      return document.getElementById('passwordError');
    case 'gender':
      return document.getElementById('genderError');
    default:
      return null;
  }
}
var isValid = true;


function validateRegisterForm(event) {
  event.preventDefault(); 

  var fullname = document.getElementById('fullname');
  var password = document.getElementById('pass');
  var nationalCode = document.getElementById('nationalCode');
  var phone = document.getElementById('phoneNumbers');
  var email = document.getElementById('emailuser');
  var isValid = true;

  var inputFields = document.querySelectorAll("#form-register input");
  var errorMessages = document.querySelectorAll("#form-register .error-message");
  inputFields.forEach(function (field) {
    field.classList.remove("invalid");
  });
  errorMessages.forEach(function (message) {
    message.textContent = "";
  });


  if (fullname) {
    var fullnameValue = fullname.value.trim();
    var fullnamePattern = /^(?![0-9])[a-zA-Z0-9\u0600-\u06FF\s]{3,}$/;
    if (!fullnamePattern.test(fullnameValue)) {
      fullname.classList.add("invalid");
      var existingErrorMessage = findErrorMessage(fullname);
      if (!existingErrorMessage) {
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'لطفا  نام مناسب وارد کنید';
        errorMessage.style.color = "red";
        errorMessage.classList.add('error-message');
        fullname.parentElement.appendChild(errorMessage);
      }
      isValid = false;
    }
  }


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

  if (email) {
    var emailValue = email.value.trim();
    var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if (!emailPattern.test(emailValue)) {
      email.classList.add("invalid");
      var existingErrorMessage = findErrorMessage(email);
      if (!existingErrorMessage) {
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'لطفا یک ایمیل معتبر وارد کنید';
        errorMessage.style.color = "red";
        errorMessage.classList.add('error-message');
        email.parentElement.appendChild(errorMessage);
      }
      isValid = false;
    }
  }

  var genderOptions = document.querySelectorAll('#form-register input[name="gender"]');
  var isGenderSelected = Array.from(genderOptions).some(option => option.checked);

  if (!isGenderSelected) {
    var errorMessage = document.createElement('span');
    errorMessage.textContent = 'لطفا جنسیت خود را انتخاب کنید';
    errorMessage.style.color = "red";
    errorMessage.classList.add('error-message');
    document.getElementById('genderError').appendChild(errorMessage);
    isValid = false;
  }

 
  // if (educationSelect) {
  //   var selectedValue = educationSelect.value;
  //   var errorMessageElement = findErrorMessage('educationLevel');

  //   if (!selectedValue) {
  //       errorMessageElement.textContent = 'لطفا مدرک تحصیلی خود را انتخاب کنید';
  //       educationSelect.classList.add('invalid');
        
  //       isValid = false;
  //   }
  // }
  
  

  return isValid;
}