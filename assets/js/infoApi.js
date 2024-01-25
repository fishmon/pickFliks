
//API link + key
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=32992e9ff7fdfeb41e232700578fc512";
//end points
const discover = {
    url: "/discover/movie?include_adult=false&include_video=false",
    language: "&language=en-US",
    originalLanguage: "&with_original_language=en",
    page: "&page=",
    year: "&primary_release_year=",
    genre: "&with_genres=",
}

//variables to get input from user
const moodCategories = {
    happy: '35|10751|16|12|10749|10402',
    neutral: '28|12|35|18|10751|16|80|99|9648|10749|878|53|10752]',
    sad: '18|10749|99|10752|36|9648|28|12|35|80|16|10751'
};
const certificationList = {
    family: 'G',
    DateNight: 'R',
    alone: 'PG-13',
    friends: 'PG-16',
    kidsParty: 'G'
}
const decades = [
    ["1980-01-01","1989-01-01"],
    ["1990-01-01","1999-01-01"],
    ["2000-01-01","2009-01-01"],
    ["2010-01-01","2019-01-01"],
    ["2020-01-01", start = new Date().getFullYear() + "-12-31"]
]

//authentication method
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjQ3NTJiN2VmNWViZWVjNTZhODk1ZDM3ZjM2OTc0MiIsInN1YiI6IjY1YTk5MDRiNjhhZmQ2MDEzNjUwODIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVzwTh-8yKN6_Fht1plTu5owNKT1EJR25B_QEzhNiuc'
    }
};

//url for Posters
const posterUrl = "https://image.tmdb.org/t/p/original"