$(document).ready(function () {
    // Get references to the buttons and the front card
    //buttons for the question containers to move to the next question
    const startButton = $('#startButton');
    const nextButton1 = $('#nextButton1');
    const nextButton2 = $('#nextButton2');
    const nextButton3 = $('#nextButton3');
    const nextButton4 = $('#nextButton4');
    const nextButton5 = $('#nextButton5');
    // the button on the navbar, that toggles the light/dark mode
    const toggleModeButton = $('#btn-check-outlined');
    // first question container buttons for happy, neutral, sad
    const happyButton = $('#happy');
    const neutralButton = $('#neutral');
    const sadButton = $('#sad');
    //this is the entire flip container, front and back
    const frontCard = $('#resultFront');

    // Add click event handlers to the buttons
    //Moves from the landing to the first Q
    startButton.click(function () {
        hideContainer('landingContainer');
        showContainer('firstQuestionJ');
    });
    // moves from the first question to the 2nd Q
    nextButton1.click(function () {
        hideContainer('firstQuestionJ');
        showContainer('secondQuestionJ');
    });

   // moves from the 2nd Q to the 3rd Q
    nextButton2.click(function () {
        hideContainer('secondQuestionJ');
        showContainer('thirdQuestionJ');
    });
    // moves from the 3rd Q to the 4th Q
    nextButton3.click(function () {
        hideContainer('thirdQuestionJ');
        showContainer('fourthQuestionJ');
    });
   // moves from the 4th Q to the 5th Q
    nextButton4.click(function () {
        hideContainer('fourthQuestionJ');
        showContainer('fiveQuestionJ');
    });
   //moves from the 5th Q to the flip card, results container
    nextButton5.click(function () {
        hideContainer('fiveQuestionJ');
        showContainerByClass('flip-container');
    });

    // click event handler to the toggle button
    toggleModeButton.click(function () {
        toggleLightDarkMode();
    });
     // for test purpose
    // click event handlers to the mood buttons
    happyButton.click(function () {
        updateFrontCardContent('Happy content');
    });
     // for test purpose
    neutralButton.click(function () {
        updateFrontCardContent('Neutral content');
    });
     // for test purpose
    sadButton.click(function () {
        updateFrontCardContent('Sad content');
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

    // Function to toggle light/dark mode
    function toggleLightDarkMode() {
        $('body, .navbar, footer').toggleClass('dark-mode');
    }
     // for test purpose
    // Function to update the content of the front card
    function updateFrontCardContent(content) {
        frontCard.find('.card-title').text(content);
        frontCard.find('.card-text').text('Additional content based on the mood.');
    }
});
