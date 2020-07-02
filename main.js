$(document).ready(function() {
  $("#getAPIbutton").click(function() {

    let request = new XMLHttpRequest();
    const theUrl = `https://dog.ceo/api/breeds/image/random`;

    request.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
        const thingWeGetBack = JSON.parse(this.response);
        getTheStuff(thingWeGetBack);
      }
    }

    request.open("GET", theUrl, true);
    request.send();

    const getTheStuff = function(thingWeGetBack) {
      let image = `<img src="${thingWeGetBack.message}" alt="random picture of a cute dog">`;
      console.log(thingWeGetBack.message);
      $("#thingGoesHere").html(`It's a cute dog ${image}`);
    }

  });
});