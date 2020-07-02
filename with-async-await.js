//business logic
function showTheDogs(responseJSON) {
  $('#thingGoesHere').html(`<img src='${responseJSON.message}'>`);
  $('#errorHere').html('');
}

function showError(errorMessage) {
  $('#thingGoesHere').html('');
  $("#errorHere").html(`You got an error! Specifically, this error: ${errorMessage}`);
}


//user interface logic NO IFFE
// $(document).ready(function() {
//   $("#getAPIbutton").click(function() {

//     async function callTheAPI() {
//       const responseFromAPI = await fetch(`https://dog.ceo/api/breeds/image/random`);
//       if(!responseFromAPI.ok) {
//         showError(responseFromAPI.statusText); //showError is a function (that we need to create) that we are calling
//       } else {
//         const responseFromAPIJsonified = await responseFromAPI.json();
//         showTheDogs(responseFromAPIJsonified); //showTheDogs is a function (that we need to create) that we are calling
//       }
//     //don't need .then because async automatically tells it to wait until the API is fetched
//     } 
//     callTheAPI(); //defined the function above, this line ACTUALLY CALLS IT
//   });
// });


//user interface logic WITH IFFE - same as UI above EXCEPT using IFFE
$(document).ready(function() {
  $("#getAPIbutton").click(function() {

    (async () => {
      const responseFromAPI = await fetch(`https://dog.ceo/api/breeds/image/random`);
      if(!responseFromAPI.ok) {
        showError(responseFromAPI.statusText); //showError is a function (that we need to create) that we are calling
      } else {
        const responseFromAPIJsonified = await responseFromAPI.json();
        showTheDogs(responseFromAPIJsonified); //showTheDogs is a function (that we need to create) that we are calling
      }
    //don't need .then because async automatically tells it to wait until the API is fetched
    })(); //This is an IFFE; it defines the function then immediately calls it so we don't need to do it seperately. Useful for functions we always want to call on sight.
  });
});