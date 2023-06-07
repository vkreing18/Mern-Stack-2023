const data=[
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    },
    {
        image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        title:"Chicken Biryani",
        fprice:"Full :Rs 250",
        hprice:" Half:Rs 250",
    }
]

const d=document.getElementById("show")
data.forEach((ele)=>{
    const div=document.createElement("div");
    div.className="st";
    const image=document.createElement("img");
    image.src=ele.image;
    image.style.width="300px";
    image.style.height="200px";
    const title=document.createElement("h3");
    title.innerText=ele.title;
    title.className="sty";
    const fprice=document.createElement("p");
    const hprice=document.createElement("p");
    fprice.innerText=ele.fprice;
    hprice.innerText=ele.hprice;
    fprice.style.display="none";
    hprice.style.display="none";
    // price.className="sty";
    const button=document.createElement("button");
    const button2=document.createElement("button");
    button.innerText="↓";
    button2.innerText="↑";
    button2.style.display="none";
    button.style.marginLeft="150px";
    button.style.marginLeft="250px";
    // button2.style.marginLeft="220px";

    button.addEventListener("click",()=>{
        // div.style.height="300px";
        fprice.style.display="inline-block";
        fprice.style.marginRight="90px";
        hprice.style.display="inline-block";
        button.disabled=true;
        button.style.display="none";
        button2.style.display="inline-block";
    });
    button2.addEventListener("click",()=>{
        // div.style.height="250px";
        button.disabled=false;
        button.style.display="inline-block";
        fprice.style.display="none";
        hprice.style.display="none";
        button2.style.display="none";
    });
    div.append(image,title,fprice,hprice,button,button2);
    d.append(div)
});

// const d = document.getElementById("show");
// fetch("http://localhost:8080/data", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => showData(data));
// function showData(data) {
//   data.forEach((ele) => {
//     const div = document.createElement("div");
//     div.className = "st";
//     const image = document.createElement("img");
//     image.src = ele.image;
//     image.style.width = "300px";
//     image.style.height = "200px";
//     const title = document.createElement("h3");
//     title.innerText = ele.title;
//     title.className = "sty";
//     const fprice = document.createElement("p");
//     const hprice = document.createElement("p");
//     fprice.innerText = ele.fprice;
//     hprice.innerText = ele.hprice;
//     fprice.style.display = "none";
//     hprice.style.display = "none";
//     // price.className="sty";
//     const button = document.createElement("button");
//     const button2 = document.createElement("button");
//     button.innerText = "↓";
//     button2.innerText = "↑";
//     button2.style.display = "none";
//     button.style.marginLeft = "150px";
//     button.style.marginLeft = "250px";
//     // button2.style.marginLeft="220px";

//     button.addEventListener("click", () => {
//       // div.style.height="300px";
//       fprice.style.display = "inline-block";
//       fprice.style.marginRight = "90px";
//       hprice.style.display = "inline-block";
//       button.disabled = true;
//       button.style.display = "none";
//       button2.style.display = "inline-block";
//     });
//     button2.addEventListener("click", () => {
//       // div.style.height="250px";
//       button.disabled = false;
//       button.style.display = "inline-block";
//       fprice.style.display = "none";
//       hprice.style.display = "none";
//       button2.style.display = "none";
//     });
//     div.append(image, title, fprice, hprice, button, button2);
//     d.append(div);
//   });
// }
