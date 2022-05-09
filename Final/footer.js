var signup = document.querySelector("#email-notification")
signup.addEventListener("click", emailnoti)

var notify = [];

function emailnoti(){
    event.preventDefault()

    var emailcheck = /^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}/

    var email = document.querySelector("#email-for-noti").value

    var alert = document.querySelector("#alert-invalid-email")

    var emailadd = {
        email_for_noti : email,
    }

    if(email == "" || !emailcheck.test(email) )
    {alert.innerText = "⚠ Please enter a valid email address."}
    
    else if(emailcheck.test(email))
    {
        notify.push(emailadd)
        localStorage.setItem("email-for-noti",JSON.stringify(notify))
        var displaymsg = document.querySelector(".signin-input")
        displaymsg.innerHTML = "✓ Thanks!"
        alert.innerText = ""
    }

    
}
