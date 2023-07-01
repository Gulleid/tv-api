
document.querySelector("#search").addEventListener("click", function() {
  let tvNameInput = document.querySelector(".search").value;

  fetch(`https://api.tvmaze.com/search/shows?q=${tvNameInput}`)
    .then(res => res.json())
    .then(data => {
      const movieCard = document.querySelector(".movie-card");
      movieCard.innerHTML = '';

     
      data.forEach(show => {
        console.log(show.show.name);
        console.log(show.show.image.original);
        console.log(show.show.rating.average);

       
        const showContainer = document.createElement("div");
        showContainer.className = "show-container";
        movieCard.appendChild(showContainer);

        const imageElement = document.createElement("img");
        imageElement.src = show.show.image.original;
        imageElement.style.width = "200px"; 
        imageElement.style.height = "150px"; 
        showContainer.appendChild(imageElement);

        const showDetails = document.createElement("div");
        showDetails.className = "show-details";
        showContainer.appendChild(showDetails);

        const showNameElement = document.createElement("h2");
        showNameElement.innerText = show.show.name;
        showDetails.appendChild(showNameElement);

        const ratingElement = document.createElement("p");
        ratingElement.innerText = `Rating: ${show.show.rating.average}`;
        showDetails.appendChild(ratingElement);

      
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
});