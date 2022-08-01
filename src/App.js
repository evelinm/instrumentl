import { useState,useEffect } from 'react';
import axios from "axios";
import DropDown from './components/DropDown';
import CatContainer from './components/CatContainer';
import { Helmet } from 'react-helmet'


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

  const getData = (data) => {
      setData(data)
  }

  return (
    <div>
      <Helmet> 
        <title> Cat Information </title>
        <meta charset="UTF-8"></meta>
        <meta name="cat app" content="This is a page about cats and shows a lot of information about cats" />
      </Helmet>
      <h1 className="text-3xl font-bold flex justify-center "> Cat Information </h1>
        <p className="flex justify-center"> Learn about cats </p>
        <DropDown breed={info} getData={getData}/>
        <CatContainer breed={info} catId={data} />
    </div>
  );
}
export default App;
