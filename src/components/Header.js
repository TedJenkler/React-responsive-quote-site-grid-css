import React from "react";

const Header = (props) => {
    return (
        <header className="card_header">
            <img src={props.img} alt='' className='card_img'></img>
            <div>
                <h3>{props.name}</h3>
                <p>Verified Graduate</p>
            </div>
        </header>
    )
}

export default Header