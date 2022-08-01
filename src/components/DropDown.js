import {useState} from 'react';

const DropDown = ({ breed, getData }) => {
    const [catId,setCatID] = useState('')

    const handleInfo = (e) => {
        setCatID(e.target.value)
        getData(e.target.value)
    }

    return(
        <div> 
            <h2> Pick a breed : </h2>
            <select onChange={handleInfo} value={catId}>
            {breed.map((b)=> (
                <option key={b.id} value={b.id}> { b.name }</option>
            ))}
            </select>
        </div>
      
    )

}
export default DropDown;