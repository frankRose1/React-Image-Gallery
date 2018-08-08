import React from 'react';
import ReactDOM from 'react-dom';

const NotFound = () => {
    const notFoundJSX = (
        <div className="page-not-found">
            <h1>Uh-oh...you broke it.</h1>
            <h2>404 - File Not Found</h2>
            <a className="home-btn" href="/">{"<"}{"<"}Take Me Home</a>
        </div>  
    );
    return (
        ReactDOM.createPortal(notFoundJSX, document.getElementById('file-not-found'))
    );
};

export default NotFound;