// grab all the HTML elements to interact with
const titleInput = document.querySelector("#titleInput");
const ratingDrop = document.querySelector("#ratingDrop");
const addBtn = document.querySelector("#addBtn");

const leftCol = document.querySelector("#leftCol");
const rightCol = document.querySelector("#rightCol");


// global variables
const moviesList = [];
const ratingsList = [];

// create an event listener for the add button
addBtn.addEventListener("click", function(){
  // get the name (title) of the movie/show
  const movieTitle = titleInput.value;
  // get the number of stars from the dropdown
  const numberOfStars = Number(ratingDrop.value);

  // check to make sure the user has filled out the "form"
  if(movieTitle === "" || numberOfStars === 0){
    alert("Please fill out both the title and your rating for the movie/show!");
    titleInput.focus();
  }else{
    // now check to see if the movie title is NOT already in the movies list
    if(!moviesList.includes(movieTitle)){
      // add the movie data to the correct list
      moviesList.push(movieTitle);
      ratingsList.push(numberOfStars);
    }
    
  }

  // print out both lists in the correct columns
  leftCol.innerHTML = "<h3>Movies</h3>"
  leftCol.innerHTML += moviesList.join("<br>");
  rightCol.innerHTML = "<h3>Rating</h3>"
  rightCol.innerHTML += ratingsList.join("<br>");

  
  
  
  console.log(movieTitle, numberOfStars);
});