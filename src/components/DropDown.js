import {useState} from 'react';

const DropDown = ({ breed, getData }) => {
    const [catId,setCatID] = useState('')

    const handleInfo = (e) => {
        setCatID(e.target.value)
        getData(catId)

    }
    console.log(catId)
    return(
        <div>
            <select onChange={handleInfo}>
            {breed.map((b)=> (
                <option  value={b.id}> { b.name }</option>
            ))}
            </select>
        </div>
      
    )

}
export default DropDown;