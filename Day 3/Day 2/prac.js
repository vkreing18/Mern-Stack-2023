const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const div = document.getElementsById("box");

button1.addEventListener("click", () => {
    let image = document.createElement("img");
  image.src ="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png";
  div.append(image);
});

button2.addEventListener("click",()=>{
    window.location.reload();
});