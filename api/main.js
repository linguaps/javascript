let userName = document.getElementById("userName");
let pass = document.getElementById("pass");

function login(){
  fetch("users.json")
    .then(response => response.json())
    .then(users => check_login(users));
}

function check_login(users)
{
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.userName === userName.value) {
      if (user.pass === pass.value) {
        alert("Logged in sucessfully.");
        return;
      } else {
        alert("Incorrect password");
        return;
      }
    }
  }
  alert("Username doesn't exist");

  // if( !== JSON.userName && pass.value !== JSON.pass){
  //   alert("fail")
  // } else {
  //   alert("success")
  // }
}
  


