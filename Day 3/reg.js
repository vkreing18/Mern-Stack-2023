const logbutton = document.getElementById("logbtn");
logbutton.addEventListener("click",()=>{
    window.location.href="log.html"
  })
const button = document.getElementById("mybutton");
button.addEventListener("click", () => {
  const takenEmail = document.getElementById("email");
  const takenName = document.getElementById("name");
  const takenMobile = document.getElementById("mob");
  const takenPassword = document.getElementById("password");
  if(takenEmail.value=="" && takenPassword.value==""){
    alert("Fill in the blanks");
    exit(0)
  }
  fetch("http://localhost:8080/web", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: takenEmail.value,
      password: takenPassword.value,
      mob: takenMobile.value,
      name: takenName.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});