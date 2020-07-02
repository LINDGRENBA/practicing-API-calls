$(document).ready(function() {
  $("#getAPIbutton").click(function() {

    fetch(`https://dog.ceo/api/breeds/image/random`) //fetch is a shortcut; it creates a promise object that executes a GET API request on the url fed into it.
      .then(function(responseJSON) {
        if (!response.ok) { //in apart version, this needs to be (!responseJSON.ok) or it doesn't work
          throw Error(responseJSON.statusText); //if response is woops, pass an error status down to catch and catch will do something with it
        }
        return responseJSON.json(); //if response is good, pass the response down to the next .then and .then will do something with it
      })
      .catch(function(error) {  //only executes if response above was woops
        return error;
      })
      .then(function(messageFromPrevious) { //if .catch triggered, messageFromPrevious will be the error message, if .catch did NOT trigger, messageFromPrevious will be the parsed JSON info
        if (messageFromPrevious.message) {
          $("#thingGoesHere").html(`It's a cute doggo <img src='${messageFromPrevious.message}' alt='Doggo McDogface'>`);
          $("#errorHere").html('');
        } else {
          $("#errorHere").html(`${messageFromPrevious}`);
          $("#thingGoesHere").html('');
        }
      });
  });
});