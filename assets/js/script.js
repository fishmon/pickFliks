$(document).ready(function () {
    // Get references to the buttons and the front card
    const startButton = $('#startButton');
    const nextButton1 = $('#nextButton1');
    const nextButton2 = $('#nextButton2');
    const nextButton3 = $('#nextButton3');
    const nextButton4 = $('#nextButton4');
    const nextButton5 = $('#nextButton5');
    const toggleModeButton = $('#btn-check-outlined');
    const happyButton = $('#happy');
    const neutralButton = $('#neutral');
    const sadButton = $('#sad');
    const frontCard = $('#resultFront');

    // Add click event handlers to the buttons
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

    // Add click event handler to the toggle button
    toggleModeButton.click(function () {
        toggleLightDarkMode();
    });
     // for test purpose
    // Add click event handlers to the mood buttons
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
