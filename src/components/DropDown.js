

const DropDown = ({ breed }) => {
    return(
        <div>
        <select>
        {breed.map((b)=> (
   
                <option>{ b.name }</option>

    

        ))}
        </select>
          
        </div>
      
    )

}
export default DropDown;