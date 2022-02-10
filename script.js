const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const returne = document.getElementById('returne');

login.addEventListener('click',function(e){
  if(email.value === '' || password.value === ''){
    returne.innerText = "Please Input Some Value"
    returne.style.marginTop ="10px";
    returne.style.marginBottom ="10px";
    returne.style.color = "red"
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
  } 
  else if(email.value === "baperhotel@gmail.com" && password.value === "baperhotel"){
    window.location.href = "./account.html"; 
  }
  else{
    returne.innerText = "Please Check Your Email or Password"
    returne.style.marginTop ="10px";
    returne.style.marginBottom ="10px";
    returne.style.color = "red"
  }

})