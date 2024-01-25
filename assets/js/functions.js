//functions
const random=Math.floor(Math.random() * 20 )+1
let moodInput;
let certificationInput;
let decadesInput;

// get mood input
$('.mood-buttons').on('click', function(){    
    // Clear the border of all mood-cards
    $('.mood-buttons').css('border', '1px solid black');
    
    // Set the border of the clicked button
    $(this).css('border', '4px solid #3D0B0B');
    
    // Store the ID 
    moodInput = $(this).attr('id');
    nextButton1.show();
});

//same method for occasion question
$('.occasion-buttons').on('click', function(){
    $('.occasion-buttons').css('border', '1px solid black');
    $(this).css('border', '4px solid #3D0B0B');
    certificationInput = $(this).attr('id')
    nextButton2.show()
    
})

// stores value (index)
$('#customRange3').on('input', function() {
    decadesInput = $(this).val();
  });

//after 3 questions call the api function for both recommendations
$('#nextButton3').on('click',function(){
    if( decadesInput === undefined || decadesInput === null){
        decadesInput = 2
    }
    callApi1();
    callApi2();
})
function callApi1(){
    const randomMovie1=Math.floor(Math.random() * 20 )+1
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&certification=${certificationInput}&certification_country=US&release_date.gte=${decades[decadesInput][0]}&release_date.lte=${decades[decadesInput][1]}&with_genres=${moodCategories.moodInput}${discover.originalLanguage}${discover.page}${randomMovie1}&sort_by=popularity.desc`;
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        populateCard1(data.results[randomMovie1])
    })
}
function callApi2(){
    const randomMovie2 = Math.floor(Math.random() * 20 )+1
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&certification=${certificationInput}&certification_country=US&release_date.gte=${decades[decadesInput][0]}&release_date.lte=${decades[decadesInput][1]}&with_genres=${moodCategories.moodInput}${discover.originalLanguage}${discover.page}${random}&sort_by=popularity.desc`;
 
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        populateCard2(data.results[randomMovie2])
    })
}
//display the information collected from API
function populateCard1(data){
    $('.poster1').attr('src',posterUrl + data.poster_path);
    $('.title1').text(data.original_title);
    $('.overview1').text(data.overview);
    $('.year1').text("Release date: "+data.release_date);
    omdbRottenTomatoes1(data.original_title)
}
function populateCard2(data){
    $('.poster2').attr('src',posterUrl + data.poster_path);
    $('.title2').text(data.original_title);
    $('.overview2').text(data.overview);
    $('.year2').text("Release date: "+data.release_date);
    omdbRottenTomatoes2(data.original_title)

}

function omdbRottenTomatoes1(title) {
    const omdbUrl = `https://www.omdbapi.com/?t=${title}&apikey=trilogy`
    fetch(omdbUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $('.tomatoes-score1').text(" " + data.Ratings[1].Value)
        });
}
function omdbRottenTomatoes2(title) {
    const omdbUrl = `https://www.omdbapi.com/?t=${title}&apikey=trilogy`
    fetch(omdbUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $('.tomatoes-score2').text(" " + data.Ratings[1].Value)
        });
}