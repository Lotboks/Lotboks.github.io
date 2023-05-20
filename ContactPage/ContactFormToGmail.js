function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mitrebaudyr@gmail.com",
        Password: "555511223344qwer",
        To: 'lotbox02@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}