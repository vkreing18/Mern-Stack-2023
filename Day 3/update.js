function getData(){
    data.map((el)=>{
        const div=document.createElement("div");
        const img=document.createElement("img");
        img.src=el.image;
        const title=document.createElement("h1");
        title.innerText=el.title;
        const updatebutton=document.createElement("button");
        updatebutton.innerText="Update";
        updatebutton.addEventListener("click",()=>{
            const updateTitle=prompt("");
            const newObj={
                title:updateTitle,
                image:el.image,
                hprice:el.hprice,
                fprice:el.fprice
            }
        })
    })
}