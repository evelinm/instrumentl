import "../css/app.css";

const CatContainer = ({catId, breed}) => { 
    return (
        <div className=" flex justify-center mt-15 cat-container">
            { breed.map((x)=>(
                catId === x.id ?
                <div className="max-w-lg" > 
                <h3 className="font-extrabold mb-10"> {x.name} </h3> 
                    <img src={x.image.url} alt={x.name}/>
                    <div> 
                        <p className="font-bold">{x.origin}</p>
                        <p>{x.description}</p>
                        <a className="cursor-pointer underline" href={x.wikipedia_url} rel="nofollow" >Learn more about {x.name} </a>
                    </div>
                </div> : null
            ))}
        </div>
    )
}
export default CatContainer;