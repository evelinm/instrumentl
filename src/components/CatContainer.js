


const CatContainer = ({catId, breed}) => {

    console.log("cat info",catId)
    console.log("cat breed",breed)

   
    return (
        <div>
        {breed.map((x)=>(
            catId === x.id ?
         <div> 
        <h2> {x.name} </h2> 
        <img src={x.image.url}/>
        <div> 
            <p>{x.origin}</p>
            <p>{x.description}</p>
            <a href={x.wikipedia_url}>Learn more about {x.name} </a>
        </div>
         </div> :null
        ))
            
        }
          
        </div>
    )
}
export default CatContainer;