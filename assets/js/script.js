$(document).ready(function () {
    // Get references to the buttons
    const startButton = $('#startButton');
    const nextButton1 = $('#nextButton1');
    const nextButton2 = $('#nextButton2');
    const nextButton3 = $('#nextButton3');
    const nextButton4 = $('#nextButton4');
    const nextButton5 = $('#nextButton5');

    // click event handlers to the buttons
    startButton.click(function () {
      hideContainer('landingContainer');
      showContainer('firstQuestionJ');
    });
  
    nextButton1.click(function () {
      hideContainer('firstQuestionJ');
      showContainer('secondQuestionJ');
    });
  
    nextButton2.click(function () {
      hideContainer('secondQuestionJ');
      showContainer('thirdQuestionJ');
    });

    nextButton3.click(function () {
        hideContainer('thirdQuestionJ');
        showContainer('fourthQuestionJ');
    });

    nextButton4.click(function () {
        hideContainer('fourthQuestionJ');
        showContainer('fiveQuestionJ');
    });

    nextButton5.click(function () {
        hideContainer('fiveQuestionJ');
        showContainerByClass('flip-container');
    });
    
    // Function to hide a container by ID
    function hideContainer(containerId) {
      $('#' + containerId).hide();
    }
  
    // Function to show a container by ID
    function showContainer(containerId) {
      $('#' + containerId).show();
    }

    // Function to show a container by class
    function showContainerByClass(containerClass) {
      $('.' + containerClass).show();
    }
});
