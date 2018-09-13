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
  var basicinfoCheckBox = $(".basic-info-check");
  var firstPagestudentInfo = $(".student-info");
  var secondPageForm = $(".secondPageForm");
  var thirdPageForm = $(".thirdPageForm");
  var secondpageSelectInfoBox = $('.selectcourse-info');
  var stepInfo = $('.step-info');
  var firstPageWarning = $('.firstPageWarning');

  // var value = studentName.val();

  icons.hide();
  studySelectBox.hide();
  secondPageForm.hide();
  thirdPageForm.hide();
  secondpageSelectInfoBox.hide();
  firstPageWarning.hide();




  // Validation
  studentName.on('keyup',validation );
  studentName.on('blur',validation );
  // studentEmail.on('keyup',emailValidation );
  studentEmail.on('blur',emailValidation );

  function validation(){
    // console.log(this.value);
    if (namePattern.test(this.value)) {
      $('.ok-icon').show();
      $('.error-icon').hide();
      totalErrors = 0;
    }else{
      $('.error-icon').show();
      totalErrors++;

    }
  }



  function emailValidation(){
    if (emailPattern.test(this.value)) {
      $('.email-ok-icon').show();
      $('.email-error-icon').hide();
      totalErrors = 0;
    }else{
      $('.email-error-icon').show();
      totalErrors++;
    }
  }




  studyBeforeRadioButton.on('change',function(){
    if ($(this).val() === 'yes') {
      studySelectBox.show();
    }
    if ($(this).val() === 'no') {
      studySelectBox.hide();
    }
  })

  basicInfoButton.on('click',show);

console.log(totalErrors);

  function show(e){
      if ( totalErrors > 0 ){
        e.preventDefault();
        firstPageWarning.show();
        console.log(totalErrors);

      }else{
        e.preventDefault();
        firstPagestudentInfo.hide();
        secondPageForm.show();
        stepInfo.hide();
        secondpageSelectInfoBox.show();
      }

  }

  $(".secondPagePrevious").on("click", function(e) {
    e.preventDefault();
    firstPagestudentInfo.show();
    secondPageForm.hide();
    stepInfo.show();
    secondpageSelectInfoBox.hide();
  });

  $('.secondPageNext').on('click',function(e){
    e.preventDefault();
    secondpageSelectInfoBox.hide();
    secondPageForm.hide();
    thirdPageForm.show();
    $('.info-heading').hide();
  });

  $('.thirdPagePrevious').on('click',function(e){
    e.preventDefault();
    thirdPageForm.hide();
    secondPageForm.show();
    $('.info-heading').show();
    secondpageSelectInfoBox.show();
  });

  // Datepick function using jquery UI
  $('#date').datepicker();


});
