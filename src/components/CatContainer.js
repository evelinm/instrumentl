


const CatContainer = ({catId, breed}) => {

   
    return (
        <div className="flex justify-center">
            {breed.map((x)=>(
                catId === x.id ?
                <div> 
                <h3> {x.name} </h3> 
                    <img className="max-w-lg"src={x.image.url} alt={x.name}/>
                    <div> 
                        <p>{x.origin}</p>
                        <p>{x.description}</p>
                        <a className="cursor-pointer underline" href={x.wikipedia_url} rel="nofollow" >Learn more about {x.name} </a>
                    </div>
                </div> : null
            ))  
            }
        </div>
    )
}
export default CatContainer;