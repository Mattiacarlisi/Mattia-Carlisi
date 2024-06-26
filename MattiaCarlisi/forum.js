/*email.js*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var params = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value, 
        message: document.getElementById("message").value
    }

    const serviceID = "service_sih6ozs";
    const templateID = "template_ttja0xl";

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        }
    )
    .catch((err) => {
        console.log(err);
        alert("There was an error sending your message.");
    });
});
