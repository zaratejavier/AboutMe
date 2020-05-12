document.addEventListener("DOMContentLoaded", function () {
  ////////////////////////////VARIABLES/////////////////////////////////
  var submitButton = document.getElementById("submit");
  var subjectArea = document.getElementById("subject");
  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  var mail = document.getElementById("email");
  var subject = document.getElementById("subject");

  
  //////////////////////////////FUNCTIONS/////////////////////////////
  
  function submitInfo(){
    finame  = firstName.value
    laname = lastName.value
    email = mail.value
    moreInfor = subject.value

    alert("Information you provided! \nFirst Name: " + name + " \n" +
    "Last Name: " + laname + "\n" + "Email: " + email + "\n" +
    "Subject: " + moreInfor)

  }


  /////////////////////////////EVENT LISTENERS////////////////////////////
  subjectArea.addEventListener('keyup', function () {
    if (event.target.value !== '') {
      submitButton.className = '';
    }
    else {
      submitButton.className = 'hide';
    }
  });

  submitButton.addEventListener('click', submitInfo )
})