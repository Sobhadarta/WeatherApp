import React, {useState} from 'react';

function InputCity({postCity, axiosInfo}) {
    const [city, setCity] = useState('')

    function submitHandler(e) {
        e.preventDefault()        
        axiosInfo(city)
        setCity("")
    }

    return( 
        <div className="inputCity">
            <form onSubmit={submitHandler}> 
                <input className="inputCurrent" value={city} onChange={(e) => setCity(e.target.value)}/>
                <button className="inputBtn" type='submit'>Отправить</button>
            </form>
        </div>
    );
}

export default InputCity