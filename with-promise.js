$(document).ready(function() {
  $("#getAPIbutton").click(function() {


    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const theUrl = `https://dog.ceo/api/breeds/image/random`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", theUrl, true);
      request.send();
    });
    
    promise.then(function(successfulJSON) {
      const arrayJSON = JSON.parse(successfulJSON);
      $("#thingGoesHere").html(`It's a cute doggo <img src='${arrayJSON.message}' alt='Doggo McDogface'>`);
      $("#errorHere").html('');
    }, function(failureJSON) {
      $("#errorHere").html(`${failureJSON}`);
      $("#thingGoesHere").html('');
    });
  });
});