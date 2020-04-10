  function validateForm(){
    var button = document.getElementById("buttons");
    var username=document.signIn.name.value;
    var password=document.signIn.password.value;

    if (username=='' || username==null) {
        return false;
        document.getElementById("nameloc").innerHTML="Username must be filled";
    }

    else if (password.length<6) {
      return false;
        document.getElementById("numloc").innerHTML="password must be more than 6 characters";
    }
    else {
      button.addEventListener("click", function() {
      alert("USER IS SIGNED IN");
    });
    }
}

// BODY CHANGES COLOUR WHEN SUBMIT BUTTON IS PRESSED

var button = document.getElementById("buttons");
button.addEventListener("click", function(){
  document.body.classList.toggle("purple")
})

//SIGNUP BUTTON
var signup=document.getElementsByTagName(a)
signup.addEventListener("mouseover", function(){
  signup.style.colour="blue";
})
