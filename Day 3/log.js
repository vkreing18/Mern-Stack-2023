const regButton = document.getElementById("regbtn");
regButton.addEventListener("click",()=>{
  window.location.href="reg.html"
})
const button = document.getElementById("log");
button.addEventListener("click", () => {
    const takenEmail = document.getElementById("email");
    const takenName = document.getElementById("name");
    const takenMobile = document.getElementById("mob");
    const takenPassword = document.getElementById("password");
    console.log(takenEmail.value);
    fetch("http://localhost:8080/web", {
        method: "GET",
      })
      .then((response) => response.json())
    .then((data) => checkData(data));
    
  function checkData(data) {
    data.forEach((el)=>{
      if(el.email===takenEmail.value && el.password===takenPassword.value && el.mob===takenMobile.value && el.name===takenName.value){
        alert("Login");
        window.location.href="web.html";
    }
    //   else if(el.email!==takenEmail.value && el.password!==takenPassword.value && el.mob!==takenMobile.value && el.name!==takenName.value){
    //     alert("Wrong");
    //     window.location.reload()
    // }
  })
  }
}
)