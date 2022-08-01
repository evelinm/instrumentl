import { useState,useEffect } from 'react';
import axios from "axios";
import DropDown from './components/DropDown';

const baseUrl = "https://api.thecatapi.com/v1/images/search";
// const voteUrl = "https://api.thecatapi.com/v1/votes?api_key=a5efcafc-7a16-4bb8-bf77-fd8c69993137"
const breedUrl = "https://api.thecatapi.com/v1/breeds?api_key=a5efcafc-7a16-4bb8-bf77-fd8c69993137";

function App() {
   const [data,setData] = useState([])
   const [breed,setBreed] = useState([])


   useEffect(()=> {
     const fetchBreed = async () => {
       const result = await axios.get(breedUrl);
       setBreed(result.data)
     }

     const fetchData = async () => {
       const result = await axios.get(baseUrl,
        {
          params: {
            breed_id: breed

          },
        })
       setData(result.data)
     }

     fetchBreed()
  
     fetchData()


   },[])


  console.log(data)
  console.log("this is the breed",breed)


  return (
    <div>
     <DropDown breed={breed}/>
    </div>
  );
}

export default App;
