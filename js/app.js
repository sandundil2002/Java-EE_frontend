$(document).ready(function () {
    $("#registration-form").on("submit", function (event) {
      event.preventDefault();

      //Get values from the form input
      var name = $("#name").val();
      var email = $("#email").val();
      var city = $("#city").val();
      var level = $("#level").val();

      const student = {
        name: name,
        email: email,
        city: city,
        level: level,
      };

      console.log(student);

      //create JSON
      const studentJSON = JSON.stringify(student);
      console.log(studentJSON);

      //Introduce AJAX
      const http = new XMLHttpRequest();
      http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                var responseTextJSON = JSON.stringify(http.responseText);
                console.log(responseTextJSON);
            } else {
                console.error("Faild");
                console.error("Status " + http.status);
                console.error("Ready status " + http.readyState);
            }
        } else {
          console.error("Ready status " + http.readyState);
        }
      }

      http.open("POST", "http://localhost:8080/sms/student", true);
      http.setRequestHeader("Content-type", "application/json")
      http.send(student);
    })
})