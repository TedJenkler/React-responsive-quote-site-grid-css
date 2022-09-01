import React from "react";

const Card = (props) => {
    return (
    <div>
        <p className="card_lead">{props.lead}</p>
        <p className="card_quote">{props.quote}</p> 
    </div>
    )
}

export default Card