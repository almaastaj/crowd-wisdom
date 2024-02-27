import React from "react";

function Loader() {
    return (
        <div className="loadingSpinnerContainer">
            <div className="loadingSpinner"></div>
            <p className="message">Loading....</p>
        </div>
    );
}

export default Loader;
