function login_result() {
    u_name = document.getElementById("username").value;
    u_password = document.getElementById("password").value;

    username = "admin";
    password = "admin123";


    if (u_name === username && u_password === password) {
      window.open("Home.html");
    } else {
     document.getElementById("Error-print").innerHTML = "Invalid Credentials";
    }


}
    