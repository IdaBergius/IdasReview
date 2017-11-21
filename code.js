

function renderMovie(movie){

    $("#movietitle").text(movie.title);
    $("#moviedescription ").text(movie.description);

//     document.getElementById("movietitle").innerText = movie.title;
//     document.getElementById("moviedescription").innerText = movie.description;
  

$("#movieactors").empty();

  for(let i=0; i<movie.actorList.length; i++){

    $("#movieactors").append("<li>" + movie.actorList[i] + "</li>");

  }
//    let actors="";
//    for(let index = 0; index < movie.actorList.length; index++){
//     actors+= "<li>"+ movie.actorList[index]+"<li>";

//    }
//    document.getElementById("movieactors").innerHTML=actors;
};

renderMovie(movieData);


// function changeStarRating(rating){
//  for (let i=1; i<=5; i++){
//     let star = document.getElementById("star" + i);
//     if(i <= rating){
//         star.classList.add("filled");}
//         else{
//             star.classList.remove("filled");
//         }
//     }
// }

function changeStarRating(rating){
    
      $(".filled").removeClass("filled");
    
      for(let i=1; i<=rating; i++){
    
        $("[data-rating-id=" + i + "]").addClass("filled");
    
      }
    
    }

    
$(".stars").on("click", "span", function(e){
    
      let star = $(e.target);
    
      let rating = parseInt(star.attr("data-rating-id"));
    
      changeStarRating(rating);
    
    });

// for (let i=1; i<=5; i++){
//     let star = document.getElementById("star" + i);
//     star.addEventListener("click", function(){
//         changeStarRating(i);

//     });

// }


