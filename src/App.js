import { useState,useEffect } from 'react';
import axios from "axios";
import DropDown from './components/DropDown';
import CatContainer from './components/CatContainer';
import { unstable_batchedUpdates } from 'react-dom';


const baseUrl = "https://api.thecatapi.com/v1/images/search";
const breedUrl = "https://api.thecatapi.com/v1/breeds?api_key=a5efcafc-7a16-4bb8-bf77-fd8c69993137";

function App() {
   const [data,setData] = useState([])
   const [info,setInfo] = useState([])


   useEffect(()=> {
     const fetchInfo = async () => {
       const result = await axios.get(breedUrl);
       setInfo(result.data)
     }

     fetchInfo()
  



   },[])



  // useEffect(() => {
  //   const getData = (data) => {
  //     setData(data)
  //   }
  //   getData()
  // }, [data]);

  const getData = (data) => {
    unstable_batchedUpdates(()=>{
      setData(data)
    })
  
  }

  return (
    <div>
     <DropDown breed={info} getData={getData}/>
     <CatContainer breed={info} catId={data} />
    </div>
  );
}

export default App;
