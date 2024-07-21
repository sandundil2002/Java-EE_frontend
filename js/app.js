document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const student = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      city: document.getElementById("city").value,
      level: document.getElementById("level").value,
    };

    console.log(student);

    // Create JSON
    const studentJSON = JSON.stringify(student);
    console.log(studentJSON);

    // Introduce AJAX
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          var responseTextJSON = JSON.stringify(http.responseText);
          console.log(responseTextJSON);
        } else {
          console.error("Failed");
          console.error("Status " + http.status);
          console.error("Ready state " + http.readyState);
        }
      } else {
        console.error("Ready state " + http.readyState);
      }
    };

    http.open("POST", "http://localhost:8080/sms/student", true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(studentJSON);
  });
});
