import React, {useState} from 'react'

function HistoryItem({city, postInfo}) {    

    function getInfo(e) {
        e.preventDefault()        
        postInfo(city)       
    }

    return(
        <li className="historyItem" onClick={(e) => getInfo(e)}>{city}</li>
    )
}

export default HistoryItem