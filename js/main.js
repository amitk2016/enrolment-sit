// Load Dom before running Jquery
$(function(){

  // Variables
  var icons = $('.icons');
  var basicInfoButton = $('.basic-info-next-button');
  var namePattern = new RegExp("^[a-zA-Z' .-]{1,50}$");
  var emailPattern = new RegExp ("^[a-zA-Z0-9._-]*[@][a-zA-Z]*\.[a-zA-Z]{2,6}$");
  var totalErrors = 0;
  var studentName = $('#student-name');
  var studentEmail = $('#student-email');
  var studyBeforeRadioButton = $('input:radio[name=study-before-radio]');
  var studySelectBox = $('.studyselectbox');

  // var value = studentName.val();

  icons.hide();
  studySelectBox.hide();


  // Validation
  // studentName.on('keyup',validation );
  studentName.on('blur',validation );
  // studentEmail.on('keyup',emailValidation );
  studentEmail.on('blur',emailValidation );

  function validation(){
    // console.log(this.value);
    if (namePattern.test(this.value)) {
      $('.ok-icon').show();
      $('.error-icon').hide();
    }else{
      $('.error-icon').show();
    }
  }
  function emailValidation(){
    // console.log(this.value);
    if (emailPattern.test(this.value)) {
      $('.email-ok-icon').show();
      $('.email-error-icon').hide();
    }else{
      $('.email-error-icon').show();
    }
  }

  console.log(studyBeforeRadioButton);

  studyBeforeRadioButton.on('change',function(){
    if ($(this).val() === 'yes') {
      studySelectBox.show();
    }
    if ($(this).val() === 'no') {
      studySelectBox.hide();
    }
  })

  basicInfoButton.on('click',show);

  function show(e){
    e.preventDefault();
  }



});
