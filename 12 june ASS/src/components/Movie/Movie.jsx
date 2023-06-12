import React from "react";
import { useEffect, useState } from 'react';
import "./Movie.css"
function Movie({image,name,author,k}){
    const [arr,setArr] = useState([]);
    const [wholearr, setWholeArr] = useState([]);
    const [searchStr,setSearchStr] = useState("");
    const getData = async () => {
          await fetch("http://localhost:5095/books",{
          method: "GET",
        })
        .then(res => res.json())
        .then(data => {
          setWholeArr(data);
          const end = page * 6;
          const start = page -1;
          const newData = data.slice(start * 6, end);
          setArr(newData);
        });
      };
      const filteredArr = arr.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
      const handleChange = (e) => {
      setSearchStr(e.target.value);
    };
  
  
  const pageArr = [];
    let i =1;
    while(i <= wholearr.length / 6){
      pageArr.push(i);
      i++;
    }
  
  const [page, setPage] = useState(1);
  const handlePage = (el) => {
      setPage(el);
    }
  
; 
  const handlePut = async(id) => {
    await fetch(`http://localhost:5095/books/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: "https://imgs.bigtop40.com/images/112568?width=1920&crop=16_9&signature=WDNdPc7JGMMhDI3N7ynu5VRZ-DA=",
        name: "ABEL",
        author: "USA"
      })
    })
    .then(res => {
      if(res.ok){
        alert("Updated");
        getData();
      }
    });
  };


  const handleUpdate = (id) => {
    const updatedTitle = prompt("Enter the updated title:");
    if (updatedTitle) {
      const updatedArr = arr.map((item) =>
        item.id === id ? { ...item, name: updatedTitle } : item
      );
      setArr(updatedArr);
    }
  };

    const handleDelete = async(e) => {
        await fetch(`http://localhost:5095/books/${e}`, {
          method: "DELETE",
        })
        .then((res) => {
          if(res.ok){
            alert("Deleted");
            getData();
          }
        });
      };
      useEffect(() => {
        getData();
      },[page]);
  
    return(
        <div className=" container box1 mb-5 ">
            <img src={image} alt="" />
            <h6>Name:{name}</h6>
            <h6>Author:{author}</h6>          
            <button class="btn btn-outline-success"  onClick={() => handleDelete(k)} >Delete</button>
            <button class="btn btn-outline-success" onClick={()=>handlePut(k)}>Update</button>
            <button class="btn btn-outline-success" onClick={()=>handleUpdate(k)}>Title</button>
        </div>
    );
}

export default  Movie;
