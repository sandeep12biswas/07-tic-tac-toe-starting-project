import { useState } from "react";

export default function Player({name, symbol,isActive}) {

    const [isEdting, setIsEditing] = useState(false);
    const [changeName, setChanngeName] = useState(name);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
       
    }

    function handleChangeName(event){
        setChanngeName(event.target.value);

    }

    let playerName = <span className='player-name'>{changeName}</span>;


    if(isEdting){
        playerName = <input type="text" required onChange={handleChangeName} value={changeName}/>;
    }
    
   

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdting ? 'Save' : 'Edit'}</button>
        </li>
    );
}