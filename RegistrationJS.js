
function validation() {



    var x = document.getElementById("fname");
    var x1 = document.getElementById("lname");
    var x2 = document.getElementById("email");
    var x3 = document.getElementById("uname");
    var x4 = document.getElementById("pass");
    var d1=document.getElementById("d1");
    console.log(x);
    var f=0;
    var lowercase = /[a-z]/g ;
    var uppercase=/[A-Z]/g;
    var number12=/[0-9]/g;
    var specialchar=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (x.value.length<=0 ) {
        d1.style.border="1px solid black";
       alert("please enter valid firstname");
       f=1;
    }
    if (x1.value.length <= 0) {
        alert("please enter valid Lastname");
        f=1;
    }
    if (x2.value.length <= 0) {
        alert("please enter valid Email-id");
        f=1;
    }
    if (x3.value.length <=0 ) {
        alert("please enter valid Username");
        f=1;
    }
    if(x4.value.length<8){
        alert("please enter valid Password");
        f=1;
    }
    else {

        if (!x4.value.match(lowercase)) {
            alert("Invalid Lowercase");
            f=1;
        }
        else if(!x4.value.match(uppercase)){
            alert("bhai Uppercase to dal password me..!!");
            f=1;
        }
        else if(!x4.value.match(number12)){
            alert("bhai number kaha hai password me..!!");
            f=1;
        }
        else if(!x4.value.match(specialchar)){
            alert("kuch to special daal password me..!!");
            f=1;
        }
    }

    if(f==0){
        localStorage.setItem("Fn",x.value);
        localStorage.setItem("Ln",x1.value);
        localStorage.setItem("Email",x2.value);
        localStorage.setItem("Uname",x3.value);
        localStorage.setItem("Password",x4.value);
      //  window.location.replace("Welcome.html");
     //   window.location.replace="Loginpage.html";
        window.location.href="Loginpage.html";
    }
}
