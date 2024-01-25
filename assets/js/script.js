$(document).ready(function () {
    // Get references to the buttons and the front card
    //buttons for the question containers to move to the next question
    const startButton = $('#startButton');
    const nextButton1 = $('#nextButton1');
    const nextButton2 = $('#nextButton2');
    const nextButton3 = $('#nextButton3');

    // the button on the navbar, that toggles the light/dark mode
    const toggleModeButton = $('#btn-check-outlined');
    // first question container buttons for happy, neutral, sad
    const happyButton = $('#happy');
    const neutralButton = $('#neutral');
    const sadButton = $('#sad');
    //this is the entire flip container, front and back
    const frontCard = $('#resultFront');

    // Second question container buttons for familly, alone, dateNight, friends
    const famillyButton = $('#familly');
    const aloneButton = $('#alone');
    const dateNightButton = $('#dateNight');
    const friendsButton = $('#friends');

    // Third question slider
    const customRange3 = $('#customRange3');
    // Flip card section
    const resultsContainer = $('#resultsContainer');
    const flipper = $('.flipper');
    const backCardGroup = $('.card-group');
    //about me sections
    const $toggleAboutButton = $('#toggleAboutButton');
    const $aboutMeSection = $('#about-section');
    const moodCategories = {
        happy: [35, 10751, 16, 12, 10749, 10402],
        neutral: [28, 12, 35, 18, 10751, 16, 80, 99, 9648, 10749, 878, 53, 10752],
        sad: [18, 10749, 99, 10752, 36, 9648, 28, 12, 35, 80, 16, 10751]
    };
    const mpaaCategories = {
        familly: 'PG',
        alone: 'PG-13',
        dateNight: 'PG-13',
        friends: 'R',
    };
    const decadeCategories = {
        0: '1970s',
        1: '1980s',
        2: '1990s',
        3: '2000s',
        4: '2010s',
        5: '2020s',
    };
    const tmdbApiKey = 'a45ae1cd50956721de8559fcdd0f36ac';

    // Add a click event listener to the button and togle visibilty
    $toggleAboutButton.on('click', function () {
        // Toggle the visibility of the about me section
        $aboutMeSection.toggle();
    });

    //adds blur image 
    $("#startButton").on("click", function () {
        $(".main-bg").addClass("blur");
    });
    // Reload the page when the brand text is clicked
    $('#brandText').click(function () {
        location.reload();
    });

    // Add click event handlers to the buttons
    //Moves from the landing to the first Q
    startButton.click(function () {
        hideContainer('landingContainer');
        showContainer('firstQuestionJ');
    });
    // moves from the first question to the 2nd Q
    nextButton1.click(function () {
        if (moodInput == undefined || moodInput == null) {
            alert("Please select one of the options")
        } else {
            hideContainer('firstQuestionJ');
            showContainer('secondQuestionJ');
        }
    });

    // moves from the 2nd Q to the 3rd Q
    nextButton2.click(function () {
        if (certificationInput == undefined || certificationInput == null) {
            alert("Please select one of the options")
        } else {
            hideContainer('secondQuestionJ');
            showContainer('thirdQuestionJ');
        }

    });
    // moves from the 3rd Q to the 4th Q
    nextButton3.click(function () {
        hideContainer('thirdQuestionJ');
        showContainerByClass('flip-container');
    });

    // click event handler to the toggle button
    toggleModeButton.click(function () {
        toggleLightDarkMode();
    });
  
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
        $('body, .navbar, footer, .main-bg').toggleClass('dark-mode');
    }
    // Function to update the content of the front card
    function updateFrontCardContent(content) {
        frontCard.find('.card-title').text(content);
        frontCard.find('.card-text').text('Additional content based on the mood.');
    }
});
