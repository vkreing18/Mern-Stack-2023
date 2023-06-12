import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie/Movie';

function App() {
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
  const handlePost = async () => {
    const image= prompt("Enter image url")
    const name= prompt("Enter Name of the Book")
    const author= prompt("Enter Author")
    const obj = {
      image:image,
      name:name,
      author:author
    };

    fetch("http://localhost:5095/books",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json)
    .then((res) => {
      if(res.ok){
        alert("Posted");
      }
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

  useEffect(() => {
    getData();
  },[page]);
 return (
    <div className="App">
    <div className='top'>
    <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ⓂⓞⓥⓘⓔⒽⓤⓑ </a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="text" value={searchStr} onChange={handleChange} placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" onClick={handlePost}>Post</button>
        </form>
      </div>
  </nav>
    </div>
     <div className="text"><h1>𝓗𝓮𝓵𝓵𝓞!!!   𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓣𝓸 𝓜𝓸𝓿𝓲𝓮𝓗𝓾𝓫</h1></div>
      {filteredArr.length > 0 ?(
        <div style={{display: 'grid', gridTemplateColumns: "repeat(3,1fr) ", marginTop: "5%"}}>
        {filteredArr.map((el) => {
          return(
            <Movie 
            k={el.id}
            name={el.name}
            image = {el.image}
            author={el.author}  />
            );
        })}
        </div>
      ) : (
        <h1 className='nodata'>No Data Found</h1>
      )
      }     
      {pageArr.map((el) => {
        return <button  className="btn1 btn btn-secondary mx-1"onClick={() => handlePage(el)}>{el}</button>
      })}
    </div>
  );
}
export default App;