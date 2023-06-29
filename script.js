

// document.querySelector("#search").addEventListener("click",function(){


//     // let apikey ="6d2435d08ec7b5590047c360305ac903"
//     let tv= document.querySelector("#search").value

    fetch(`https://api.tvmaze.com/search/shows?q=${tv}`)
    
//     .then((movies)=>{

//      return res.json()

//     })
//   .then ((movies)=>{
//     movies.map(movies=>{

//       document.querySelector(".movie-card")
//     })

//     console.log(data)


//     document.querySelector(".search-box").innerText= data.name

//   })
// })


// function displayTVNames() {


//   fetch('https://api.tvmaze.com/search/shows?q=${t}') // Replace with the actual URL of the data source
//     .then(response => response.json())
//     .then(data => {
//       // Assuming the data is an array of TV names
//       data.forEach(tvName => {
//         console.log(tvName);
//       });
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
// }


// document.querySelector("#search").addEventListener("click",function(){

//   let tvName= document.querySelector("#search").value
  
//   fetch(`https://api.tvmaze.com/search/shows?q=${tvName}`)
//   .then(response => response.json())
//   .then(data => {
//     // Assuming the data is an array of TV names
//     data.forEach(tvName => {
//       console.log(tvName);


    
//     });
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });



// })

document.querySelector("#search").addEventListener("click", function() {
  let tvNameInput = document.querySelector("#search-input").value;

  fetch(`https://api.tvmaze.com/search/shows?q=${tvNameInput}`)
    .then(res => res.json())
    .then(data => {
      // Assuming the data is an array of TV names
      data.forEach(tv=> {
        console.log(tv.show.name);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
});











