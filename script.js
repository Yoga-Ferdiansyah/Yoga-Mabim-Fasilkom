function Login(){
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if(username == "himasi" && password == "himasi"){
        if(confirm("apakah anda ingin login?")== true){
            window.location.href = "https://github.com/Yoga-Ferdiansyah";
        }else{
            alert("membatalkan login !");
        }
    }else{
        if(done == 0);{
            alert("Username atau Password yang anda masukan salah!");
        }
    }

}