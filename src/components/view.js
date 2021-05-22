import React from 'react';
import moment from 'moment'

function ViewCity(props) {
    const date = moment.utc().valueOf()
    const momentDate = moment(date + props.city.timezone*1000).hour()
    const $ = moment.utc().format()
    const oldDate = new Date(new Date().getTime() + props.city.timezone*1000).toISOString()


    React.useEffect(() => {
        console.log(date, momentDate)
    }, [date,momentDate])

    
    return(
        <div className="view">
            {props.city && 
            <ul className="list viewList">
                <li>{props.city.name}</li>
                <li>
                    <div className="weatherIcon">
                        <img src={"http://openweathermap.org/img/wn/" + props.city.weather[0].icon + "@2x.png"} width="50" height="50"></img>
                        <span>{props.city.weather[0].description}</span>
                    </div>
                </li>
                <li>Temperature {props.city.main.temp} ℃</li>
                <li>Feels like {props.city.main.feels_like} ℃</li>
                <li>{oldDate}</li>
            </ul>}
        </div>
    )
}

export default ViewCity