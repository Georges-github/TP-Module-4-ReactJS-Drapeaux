import React from 'react';

const NotFound = () => {
    return (
        <>
            <div className="notfound-container">
                <img style={{position: "absolute" , top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} src='../../../public/img/erreurs-404-300x300.png'></img>
            </div>
        </>
    )
}

export default NotFound;