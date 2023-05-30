// const button=document.getElementById("btn");
// button.addEventListener("click",()=>{
//     const div =document.getElementById("show");
//     const image=document.createElement("img");
//     image.src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png"
//     div.append(image);
// });

// const button1= document.getElementById("btn");
// button1.addEventListener("click", ()=>{
//     const div =document.getElementById("show");
//     const image=document.createElement("img");
//     image.src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png";
//     div.append(image);

// })


const table=document.querySelector("table");

button1.addEventListener("click",()=>{
    const tr1=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="1";
    const td2=document.createElement("td");
    td2.innerText="Sahid";
    td2.style.color="red";
    const td3=document.createElement("td");
    td3.innerText="20bcsf02";
    tr1.append(td1,td2,td3);
    table.append(tr1);
    const tr2=document.createElement("tr");
    const td11=document.createElement("td");
    td11.innerText="2";
    const td22=document.createElement("td");
    td22.innerText="mirza";
    const td33=document.createElement("td");
    td33.innerText="20beeb07";
    tr2.append(td11,td22,td33);
    table.append(tr2);
})

button2.addEventListener("click",()=>{
    window.location.reload();
})