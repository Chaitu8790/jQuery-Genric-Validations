$(document).ready(function() {
   $('#submit').click(function() { //Calling all Form Element Functions

      firstname();
      lastname();
      email();
      phonenum();
      Gender();
      combocheck();
      dropd();
      checks();

      if (firstname() == true && lastname() == true && email() == true && Gender() == true && phonenum() == true && combocheck() == true && dropd() == true && checks() == true) {

         alert("Form Submitted Successfuly!");
         $("#myForm").reset();
      }
      return false;

   });
});

function firstname() {
   var firstname = $('#fname').val();
   var name_regex = /^[a-zA-Z]+$/; // Initializing Variable With Regular Expressions
   if (!firstname.match(name_regex) || firstname.length == 0) // Validating First Name Field.
   {
      $('#fnm').text("*Please Enter name and  alphabets only *"); // This Segment Displays The Validation Rule For Name
      $('#fnm').css("color", "red");
      $("#fname").focus();
      return false;
   } else {
      $('#fnm').html("");
      return true;

   }
}

function lastname() {
   var lastname = $('#lname').val(); // Initializing Variable With Form Element Values          
   var lasname_regex = /^[a-zA-Z]+$/; // Initializing Variable With Regular Expressions

   if (!lastname.match(lasname_regex) || lastname.length == 0) // Validating Last Name Field.
   {
      $('#lnm').text("*Please Enter name and alphabets only *"); // This Segment Displays The Validation Rule For Name
      $('#lnm').css("color", "red");
      $("#lname").focus();
      return false;
   } else {
      $('#lnm').html("");
      return true;

   }
}

function email() {
   var email = $('#email').val(); // Initializing Variable With Form Element Values 
   var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/; // Initializing Variable With Regular Expressions
   // Validating Email Field.
   if (!email.match(email_regex) || email.length == 0)

   {

      $('#enm').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
      $('#enm').css("color", "red");
      $("#email").focus();
      return false;
   } else {
      $('#enm').html("");
      return true;

   }
}

function phonenum() {
   var phone = $('#pn').val(); // Initializing Variable With Form Element Values  
   var phone_regex = /^\d{4}-\d{3}-\d{4}$/; // Initializing Variable With Regular Expressions
   if (!phone.match(phone_regex) || phone.length == 0)

   {
      $('#pnm').text("* Please Enter Correct Phone number *"); // This Segment Displays The Validation Rule For Phone num
      $('#pnm').css("color", "red");
      $("#pn").focus();
      return false;
   } else {
      $('#pnm').html("");
      return true;
   }
}

function Gender() {

   if (!$('input[name=gender_male]:checked').val()) // Validating Gender Field. 
   {
      $("#gnm").text("* Please Select Gender *"); // This Segment Displays The Validation Rule For Selecting Gender

      $("#gnm").css("color", "red");
      $("#gn").focus();

      return false;
   } else {
      $("#gnm").html("");
      return true;
   }
}

function combocheck() {
   var courses = $("#course").val(); // Initializing Variable With Form Element Values  
   if (courses == "") // Validating Course Field.
   {
      // This Segment Displays The Validation Rule For Selecting Courses            
      $("#courseerror").html("*Please choose your course");
      $("#courseerror").css("color", "red");
      $("#course").focus();
      return false;
   } else {
      $("#courseerror").html("");
      return true;

   }
}

function dropd() {

   var cont = $('#mySelect').val(); // Initializing Variable With Form Element Values 
   if (cont == 0) { // Validating Select Field  
      $('#cnm').text("* Please Choose any one option"); // This Segment Displays The Validation Rule For Selection of Country
      $('#cnm').css("color", "red");
      $("#mySelect").focus();
      return false;
   } else {
      $('#cnm').html("");
      return true;
   }
}

function checks() {

   if (!this.myform.checkbox.checked) // Validating Checkbox
   {
      $('#checkm').text("* You must agree to the terms first."); // This Segment Displays The Validation Rule For Checkbox
      $('#checkm').css("color", "red");
      $('#check').focus();
      return false;
   } else {

      $('#checkm').html("");

      return true;

   }
}

function bl() { //Blur Events 
   $("#fnm").html("");
   $("#lnm").html("");
   $("#enm").html("");
   $("#pnm").html("");
   $("#gnm").html("");
   $("#courseerror").html("");
   $("#cnm").html("");
   $("#checkm").html("");
}