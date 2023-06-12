// import React from 'react'
// import { useEffect, useState } from 'react';

// function Card() {
//     const [arr,setArr] = useState([]);
//     const [wholearr, setWholeArr] = useState([]);
//     // const [searchStr,setSearchStr] = useState("");
//   const pageArr = [];
//     let i =1;
//     while(i <= wholearr.length / 10){
//       pageArr.push(i);
//       i++;
//     }
//     console.log(pageArr);
  
//     const [page, setPage] = useState(1);
//     const getData = async () => {
//       // await fetch("http://localhost:5090/page",{
//       await fetch("http://localhost:5095/data",{
//         method: "GET",
//       })
//       .then(res => res.json())
//       .then(data => {
//         setWholeArr(data);
//         const end = page * 10;
//         const start = page -1;
//         const newData = data.slice(start * 10, end);
//         setArr(newData);
//       });
//     };
//   const handlePage = (el) => {
//       setPage(el);
//     }
  
//     useEffect(() => {
//       getData();
//     }, [page]);
//    return (
//       <div className="App">
//         {arr.length > 0 ?(
//           <div style={{display: 'grid', gridTemplateColumns: "repeat(3,1fr) ", marginTop: "5%"}}>
//           {arr.map((el) => {
//             return(
//               <Movie
//               title={el.title}
//               image = {el.image}
//               about={el.about}  />
//             );
//           })}
//           </div>
//         ) : (
//           <h1>No Data Found</h1>
//         )
//         }     
//         {pageArr.map((el) => {
//           return <button onClick={() => handlePage(el)}>{el}</button>
//         })}
//       </div>
//     );
//   }
  
  
//   export default Card;











import React from "react";
function Card({userId,title,body}){
    return(
        <div>
            <h1>{userId}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Card;