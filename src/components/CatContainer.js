


const CatContainer = ({catId, breed}) => {

   
    return (
        <div>
            {breed.map((x)=>(
                catId === x.id ?
                <div> 
                <h3> {x.name} </h3> 
                    <img src={x.image.url} alt={x.name}/>
                    <div> 
                        <p>{x.origin}</p>
                        <p>{x.description}</p>
                        <a href={x.wikipedia_url} rel="nofollow" >Learn more about {x.name} </a>
                    </div>
                </div> : null
            ))  
            }
        </div>
    )
}
export default CatContainer;