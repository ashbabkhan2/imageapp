import './App.css';
import {useState,useEffect} from 'react';
import Photo from './components/Photo';
import SearchIcon from '@material-ui/icons/Search';
import Navbar from './components/navbar/Navbar';

function App() {
     const[searchvalue,setsearchvalue] = useState('wallpaper');
     const[page,setpage] = useState(20);
     const url = 'https://pixabay.com/api/?key=21870022-e4e277c6197c6c94041332bbe&q='+searchvalue+'&per_page='+page;
     const [data,setdata] = useState([]);
    //  fetching data from API
     const fetch_api=async()=>{
        const response = await fetch(url);
        const data = await response.json();
        setdata(data.hits);
        console.log(data.hits)
     }
     console.log(url)
    //  Calling useEffect so that it run automatically one time
    useEffect(()=>{
      fetch_api();
    },[])
    // calling to increase the page size
    const increase_page = () =>{
      let pages = page+10;
      console.log(pages)
      setpage(pages);
    }
  return (
    <>
      
          
    <div className="App">
      <Navbar />
      <div className='inputs'>
      <input type='text' onChange={(e)=>{
        setsearchvalue(e.target.value);
        fetch_api();
      }} placeholder='Search photo'/><SearchIcon className='icon' onClick={fetch_api} style={{color:'white',fontSize:25,height:'40px'}} />
      </div>
      <div className='grids'>
       {
         data.map((o)=>{
           return <Photo image={o.largeImageURL} urls={o.pageURL}/>
         })
       } 
       </div>
       <div className='load'>
        <a href='#' onClick={(e)=>{fetch_api();increase_page();}}>Load More</a>
       </div>
    </div>
    </>
  );
}

export default App;
