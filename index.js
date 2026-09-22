const form = document.getElementById("contactform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("result").textContent =
        "Thank you, " + name + "! Your message has been received.";

});

