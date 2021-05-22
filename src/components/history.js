import React, { useMemo } from 'react';
import HistoryItem from './historyItem'

function History(props) {
    const historyArr = useMemo(() => {
        return [...props.cities].reverse()
    }, [props.cities])

    return(
        <div className="history">
            <ul className="list cityList">
                {historyArr.map((item) => <HistoryItem city={item} postInfo={props.postCity}/>)}                   
            </ul>
        </div>
    )
}

export default History
