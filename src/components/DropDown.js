import { useState } from 'react';

const DropDown = ({ breed, getData }) => {
    const [catId,setCatID] = useState('')

    const handleInfo = (e) => {
        setCatID(e.target.value)
        getData(e.target.value)
    }

    return(
        <div className=" flex justify-center mt-10"> 
            <h2> Pick a breed : </h2>
            <select onChange={handleInfo}>
            {breed.map((b)=> (
                <option value={b.id}> { b.name }</option>
            ))}
            </select>
        </div>
    )
}
export default DropDown;